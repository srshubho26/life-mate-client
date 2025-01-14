import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png';

const Logo = () => (<Link to="/"
    className="flex items-center text-xl sm:text-2xl font-bold font-playwrite bg-gradient-to-t from-primary to-accent-deep bg-clip-text text-transparent">
    <img className="w-10 sm:w-14" src={logo} alt="Logo" />
    <span className="">Life</span>
    <span className="">Mate</span>
</Link>);

export default Logo;