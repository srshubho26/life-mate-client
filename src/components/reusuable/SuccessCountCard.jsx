import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const SuccessCountCard = ({ isVisible, stat, name }) => {
    return (<div className="neomorphism-outset dark:neomorphism-outset-dark rounded-md py-5 pb-8">


        <span className="text-primary text-5xl my-5 neomorphism-outset dark:neomorphism-outset-sm-dark w-fit mx-auto rounded-full p-5 block font-bold">
            <CountUp duration={2} end={isVisible && stat} />
        </span>

        <h3 className="text-primary text-2xl uppercase font-bold neomorphism-outset dark:neomorphism-outset-sm-dark rounded-full px-5 py-1 w-fit mx-auto">
            {name}
        </h3>
    </div>);
};

SuccessCountCard.propTypes = {
    icon: PropTypes.object,
    isVisible: PropTypes.bool,
    stat: PropTypes.number,
    name: PropTypes.string
};

export default SuccessCountCard;