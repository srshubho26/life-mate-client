import PropTypes from 'prop-types';

const Title = ({ title, extraCss = "" }) => {
    return (<h2 className={'text-center font-playwrite capitalize font-bold text-primary text-2xl sm:text-5xl ' + extraCss}>
        {title}
    </h2>);
};

Title.propTypes = {
    title: PropTypes.string,
    extraCss: PropTypes.string
};

export default Title;