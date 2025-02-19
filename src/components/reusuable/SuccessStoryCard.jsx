import PropTypes from 'prop-types';
import moment from 'moment';
import { MdDateRange } from 'react-icons/md';
import StarRatings from 'react-star-ratings';

const SuccessStoryCard = ({ story }) => {
    return (<div className="p-4 text-text rounded-md neomorphism-outset dark:neomorphism-outset-dark flex flex-col gap-2">
        <img src={story.couple_img} className="w-full aspect-square object-cover rounded-md" />

        <div className="grow flex flex-col">
            <h4 className="text-2xl font-semibold text-primary">{story.name}</h4>
            <p className="flex items-center gap-1 font-semibold dark:text-text-dark">
                <span className="text-2xl text-primary"><MdDateRange /></span>
                <span>
                    {moment(story.marriage_date).format('MMM DD, YYYY')}
                </span>
            </p>

            <p className="my-3 grow dark:text-lite">{story.review}</p>

            <StarRatings
                rating={story.rating}
                starEmptyColor="#f5dca0"
                starRatedColor="#ebaa0a"
                starDimension="30px"
                starSpacing="2px"
                numberOfStars={5}
            />
        </div>
    </div>);
};

SuccessStoryCard.propTypes = {
    story: PropTypes.object
};

export default SuccessStoryCard;