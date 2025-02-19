import { Helmet } from "react-helmet-async";
import Title from "../../components/reusuable/Title";
import about from "../../assets/img/about_us.svg";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<section className="px-2 pt-10 pb-20  biodatas min-h-screen">
        <Helmet>
            <title>About || Life Mate</title>
        </Helmet>

        <Title title="About Us" />

        <div className="mt-10 flex-col-reverse lg:flex-row max-w-screen-xl mx-auto flex items-center gap-5">
            <div className="text-text text-justify flex flex-col gap-4 w-full lg:w-1/2">
                <p>Welcome to LifeMate, a trusted and compassionate matrimonial platform dedicated to helping individuals find their perfect match. We understand that the journey to finding a life partner is personal and unique, and we are here to make that journey smoother, safer, and more successful.</p>

                <p>At LifeMate, we focus on meaningful connections based on shared values, mutual respect, and long-term compatibility. We bring together individuals from diverse backgrounds, cultures, and traditions, offering a space where people can find a partner who truly complements their personality and life goals.</p>

                <p>Our platform is designed with you in mind. We offer a range of features that prioritize safety, security, and ease of use. With strict privacy policies and advanced security measures, you can connect with confidence, knowing that your personal information is protected. We also offer detailed profiles, search filters, and instant messaging tools to help you find someone who aligns with your aspirations.</p>

                <p>What sets LifeMate apart is our dedication to providing a personalized experience. We understand that every individual has unique preferences, and our matchmaking process is tailored to meet your specific needs. Our team of experts works tirelessly to offer personalized guidance, ensuring that your journey to find your LifeMate is fulfilling and successful.</p>

                <p>We believe in fostering an environment where respect, integrity, and transparency are at the heart of every interaction. LifeMate is more than just a matrimonial website. Tt is a community committed to helping you find true love and companionship.</p>

                <p>Thank you for choosing LifeMate. We are here to support you every step of the way on your journey to a happy, fulfilling life with your perfect match.</p>

            </div>

            <div className="w-full max-w-md lg:max-w-full lg:w-1/2">

                <img src={about} className="w-full" />
            </div>
        </div>
    </section>
    );
};

export default About;