import PropTypes from 'prop-types';

const Title = ({ title, extraCss = "" }) => {
    return (<h2 className={'bg-gradient-to-t py-2 bg-clip-text from-primary to-secondary text-center font-playwrite capitalize font-bold text-transparent text-2xl sm:text-3xl md:text-5xl ' + extraCss}>
        {title}
    </h2>);
};

Title.propTypes = {
    title: PropTypes.string,
    extraCss: PropTypes.string
};

export default Title;