import { TextInput } from "flowbite-react";
import swal from "sweetalert";

const Newsletter = () => {
    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        swal("Done", "Thanks for joining our newsletter.", "success");
    }

    return (<form className="flex w-full gap-x-3" onSubmit={handleSubmit}>
        <TextInput placeholder="Enter your email" required type="email" className="grow neomorphism-outset dark:neomorphism-outset-sm-dark rounded-md" />

        <button className="px-3 lg:px-5 rounded-md text-primary hover:text-lite font-semibold uppercase transition-all relative neomorphism-outset dark:neomorphism-outset-sm-dark bg-expand" type="submit">
            <span className="relative z-20">Subscribe</span>
            </button>
    </form>);
};

export default Newsletter;