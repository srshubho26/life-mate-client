import { Helmet } from "react-helmet-async";
import Title from "../../components/reusuable/Title";
import contact from '../../assets/img/contact_us.svg';
import { Label, Textarea, TextInput } from "flowbite-react";
import swal from "sweetalert";
import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        swal("Done", "Thanks for your message. We will contact your asap.", "success");
    }

    return (<section className="px-2 py-10  biodatas min-h-screen">
        <Helmet>
            <title>Contact || Life Mate</title>
        </Helmet>

        <Title title="Contact Us" />

        <div className="flex flex-col-reverse md:flex-row items-center max-w-md md:max-w-screen-xl mx-auto md:mt-10 md:justify-between">
            <form onSubmit={handleSubmit} className="w-full max-w-xl bg-element dark:bg-background-dark neomorphism-outset dark:neomorphism-outset-dark rounded-md px-4 sm:p-4">
                <div className="mb-6 mt-3">
                    <Label className="mb-2 block text-primary-dark text-lg">
                        Email
                    </Label>
                    <TextInput required placeholder="Enter Your Email" type="email" />
                </div>

                <div className="mb-6">
                    <Label htmlFor="subject" className="mb-2 block text-primary-dark text-lg">
                        Subject
                    </Label>
                    <TextInput required placeholder="Tell us what's wrong" />
                </div>

                <div className="mb-6">
                    <Label className="mb-2 block text-primary-dark text-lg">
                        Message
                    </Label>
                    <Textarea required placeholder="Briefly tell us your query..." rows={8} />
                </div>

                <div className="mb-6">
                    <button className="w-fit neomorphism-outset dark:neomorphism-outset-sm-dark text-primary bg-expand relative transition-colors font-semibold text-lg rounded px-10 py-2 hover:text-lite uppercase">
                        <span className="relative z-20">Send</span>
                    </button>
                </div>
            </form>

            <img src={contact} className="grow max-w-md lg:max-w-xl" />
        </div>

    </section>
    );
};

export default Contact;