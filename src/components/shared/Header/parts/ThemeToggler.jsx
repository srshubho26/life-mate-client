import PropTypes from "prop-types";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

const iconCommonClass = 'absolute dark:text-white dark:left-7 sm:dark:left-9 left-1 text-sec_title bottom-0.5 sm:bottom-1.5 text-sm transition-[left] ';
const ThemeToggler = ({ setDark }) => {
    return (
        <button
            className="relative w-12 sm:w-14 h-5 sm:h-6 rounded-full neomorphism-outset-sm dark:neomorphism-outset-sm-dark bg-element dark:bg-lite-dark"
            onClick={() => setDark(dark => {
                localStorage.setItem('dark', !dark);
                return !dark;
            })}>
            <BsFillMoonStarsFill className={iconCommonClass + 'dark:opacity-100 opacity-0'} />
            <MdSunny className={iconCommonClass + 'dark:opacity-0 opacity-100'} />
        </button>
    );
};

ThemeToggler.propTypes = {
    setDark: PropTypes.func
}

export default ThemeToggler;