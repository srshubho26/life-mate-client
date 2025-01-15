import { Helmet } from 'react-helmet-async';
import Title from '../../components/reusuable/Title';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './parts/CheckoutForm';
import { useState } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import Loading from '../../components/reusuable/Loading'
import useIsRequestExists from '../../hooks/useIsRequestExists';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const {state} = useLocation();
    const {biodataId} = useParams();
    const {isExists, checking} = useIsRequestExists(biodataId);

    if((!state?._id || !biodataId) || (!checking && isExists))return <Navigate to="/"/>

    return (<section className="px-2 py-20 bg-lite biodatas min-h-screen relative">
        <Loading loading={loading} />

            <Helmet>
                <title>Checkout || Love Mate</title>
            </Helmet>

            <Title title="Checkout"/>
            
            <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm setLoading={setLoading} biodataId={biodataId} />
            </Elements>
            </div>
        </section>
    );
};

export default Checkout;