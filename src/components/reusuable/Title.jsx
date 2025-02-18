import PropTypes from 'prop-types';

const titleCss = ' text-center font-playwrite capitalize font-bold text-transparent text-2xl sm:text-3xl md:text-5xl relative ';

const Title = ({ title, extraCss = "" }) => {
    return (<h2 className={titleCss + extraCss}>
        <span className='bg-gradient-to-t py-2 bg-clip-text from-primary to-secondary relative z-10'>
            {title}
            </span>

        <span className='absolute left-1/2 -translate-x-1/2 w-full text-shadow'>{title}</span>
    </h2>);
};

Title.propTypes = {
    title: PropTypes.string,
    extraCss: PropTypes.string
};

export default Title;