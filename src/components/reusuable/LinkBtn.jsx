import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkBtn = ({to, name}) => {
    return (<Link to={to} className="w-fit block mt-10 mx-auto text-primary transition-colors font-semibold text-lg rounded-lg px-6 py-2 hover:text-lite uppercase neomorphism-outset bg-expand relative">
        <span className="relative z-20">{name}</span>
    </Link>);
};

LinkBtn.propTypes = {
    to: PropTypes.string,
    name: PropTypes.string
};

export default LinkBtn;