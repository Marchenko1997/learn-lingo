import css from "./ReviewItem.module.css";
import sprite from "../../assets/sprite.svg";
import defaultImage from "../../assets/avatar.webp";

const ReviewItem = ({ reviewsDetails }) => {
    
  const { comment, reviewer_name, reviewer_rating, reviewer_avatar } =
    reviewsDetails;

  const defaultImg = `${defaultImage}`;

  return (
    <div className={css.container}>
      <div className={css.topContainer}>
        <div className={css.imgContainer}>
          <img
            className={css.img}
            src={reviewer_avatar ? reviewer_avatar : defaultImg}
            alt={`${reviewer_name} avatar`}
          />
        </div>
        <div className={css.contentContainer}>
          <h4 className={css.title}>{reviewer_name}</h4>
          <div className={css.ratingContainer}>
            <svg className={css.iconStar} width="16" height="16">
              <use href={`${sprite}#icon-star`}></use>
            </svg>
            <p className={css.ratingText}>{reviewer_rating.toFixed(1)}</p>
          </div>
        </div>
      </div>
      <p className={css.text}>{comment}</p>
    </div>
  );
};

export default ReviewItem;
