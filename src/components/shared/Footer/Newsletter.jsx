import { TextInput } from "flowbite-react";
import swal from "sweetalert";

const Newsletter = () => {
    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        swal("Done", "Thanks for joining our newsletter.", "success");
    }

    return (<form className="flex w-full gap-x-3" onSubmit={handleSubmit}>
        <TextInput placeholder="Enter your email" required type="email" className="grow border-primary" />

        <button className="border border-primary px-3 lg:px-5 rounded-md text-primary hover:text-lite font-semibold uppercase transition-colors hover:bg-primary" type="submit">Subscribe</button>
    </form>);
};

export default Newsletter;