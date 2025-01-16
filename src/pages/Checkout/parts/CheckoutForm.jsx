import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosWithCredentials from '../../../hooks/useAxiosWithCredentials';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Label, TextInput } from 'flowbite-react';
import swal from 'sweetalert';
import PropTypes from 'prop-types';

const CheckoutForm = ({setLoading, biodataId}) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosWithCredentials = useAxiosWithCredentials();
    const [clientSecret, setClientSecret] = useState(null);
    const user = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosWithCredentials.post('/create-payment-intent', { price: 5, email: user?.email })
            .then(res => {
                setClientSecret((res.data.clientSecret));
            })
    }, [axiosWithCredentials, user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const confirm = await swal({
            title: "Are you sure?",
            text: "You are going to pay $5.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })

        if (!confirm) return;
        if (!stripe || !elements) return;
        const card = elements.getElement(CardElement);
        if (card === null) return;

        setLoading(true);
        const { paymentIntent, error: confirmErr } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    name: user?.displayName || 'Anonymous',
                    email: user?.email || 'n/a'
                }
            }
        })

        if (confirmErr) {
            setLoading(false);
            swal("Error", confirmErr.message, "error");
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            const payment = {
                requestedBy: {
                    name: user.displayName,
                    email: user.email
                },
                requestedFor: biodataId,
                transactionId: paymentIntent.id,
                status: 'pending',
                date: Date.now()
            }

            await axiosWithCredentials.post('/payments', payment);
            setLoading(false);
            swal("Done", "Your request is under admin approval.", "success")
                .then(() => {
                    navigate('/')
                })
        }

    }

    return (<form onSubmit={handleSubmit} className="text-center max-w-screen-md mx-auto mt-10">
        <div className='flex gap-2 mb-10 text-left'>
            <div className="basis-1/2">
                <div className="mb-2 block">
                    <Label value="Biodata ID" />
                </div>
                <TextInput defaultValue={biodataId} readOnly />
            </div>

            <div className="basis-1/2">
                <div className="mb-2 block">
                    <Label value="Email" />
                </div>
                <TextInput defaultValue={user.email} readOnly />
            </div>
        </div>

        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />

        <button
            className="hover:bg-primary text-primary hover:text-lite border border-primary font-bold text-xl py-3 rounded-md w-full max-w-96 disabled:opacity-70 disabled:hover:bg-transparent disabled:hover:text-primary mt-10"
            type="submit"
            disabled={!stripe || !clientSecret}>
            Pay
        </button>

    </form>)
};

CheckoutForm.propTypes = {
    setLoading: PropTypes.func,
    biodataId: PropTypes.string
}

export default CheckoutForm;