import { RiVerifiedBadgeFill } from "react-icons/ri";
import Title from "../../../components/reusuable/Title";

const Membership = () => {
    return (<section className="px-2 py-20 ">
        <div className="max-w-screen-xl mx-auto">
            <Title title="Our Membership Plans" />

            <div className="max-w-sm mx-auto sm:max-w-full grid sm:grid-cols-2 gap-5 xl:gap-10 lg:text-xl font-semibold">
                <div className="neomorphism-outset dark:neomorphism-outset-dark p-5 xl:p-10 rounded-md">
                    <h4 className="text-secondary text-3xl text-shadow-sm font-playwrite tracking-wider mb-8">Normal</h4>

                    <ul>
                        <li className="flex gap-1 items-center my-2 text-primary">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Publish your own biodata</span>
                        </li>

                        <li className="flex gap-1 items-center my-2 text-primary">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Share your success story</span>
                        </li>

                        <li className="flex gap-1 items-center my-2 text-primary">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Add favourite biodata</span>
                        </li>

                        <li className="flex gap-1 items-center my-2 text-secondary">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Free access to contact details</span>
                        </li>

                        <li className="flex gap-1 items-center my-2 text-secondary">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Premium badge</span>
                        </li>

                        <li className="flex gap-1 items-center my-2 text-secondary">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Special discount for further subscriptions</span>
                        </li>

                        <li className="flex gap-1 items-center my-2 text-secondary">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Premium support session</span>
                        </li>
                    </ul>
                </div>

                <div className="neomorphism-outset dark:neomorphism-outset-dark p-5 xl:p-10 rounded-md text-primary bg-element dark:bg-background-dark">
                    <h4 className="text-3xl text-shadow-sm font-playwrite tracking-wider mb-8">Premium</h4>

                    <ul>
                        <li className="flex gap-1 items-center my-2">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Publish your own biodata</span>
                        </li>

                        <li className="flex gap-1 items-center my-2">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Share your success story</span>
                        </li>

                        <li className="flex gap-1 items-center my-2">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Add favourite biodata</span>
                        </li>

                        <li className="flex gap-1 items-center my-2">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Free access to contact details</span>
                        </li>

                        <li className="flex gap-1 items-center my-2">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Premium badge</span>
                        </li>

                        <li className="flex gap-1 items-center my-2">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Special discount for further subscriptions</span>
                        </li>

                        <li className="flex gap-1 items-center my-2">
                            <span><RiVerifiedBadgeFill /></span>
                            <span>Premium support session</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>);
};

export default Membership;