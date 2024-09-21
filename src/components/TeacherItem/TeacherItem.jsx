import css from "./TeacherItem.module.css";
import sprite from "../../assets/sprite.svg";
import defaultImage from "../../assets/avatar.webp";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalBookTrialLesson from "../../components/ModalBookTrialLesson/ModalBookTrialLesson";
import ReviewItem from "../ReviewItem/ReviewItem";
import LevelItem from "../LevelItem/LevelItem";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import { selectFavoriteTeachers } from "../../redux/favorites/selectors";
import { addTeacher, deleteTeacher } from "../../redux/favorites/slice";
import scrollController from "../../services/noScroll";

const TeacherItem = ({ teachersDetails, active, levelOption }) => {
  const {
    id,
    avatar_url,
    name,
    surname,
    lessons_done,
    rating,
    price_per_hour,
    languages,
    lesson_info,
    conditions,
    experience,
    reviews,
    levels,
  } = teachersDetails;

  const defaultImg = `${defaultImage}`;

  const [readMore, setReadMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(active);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const favorites = useSelector(selectFavoriteTeachers);

  function openModal() {
    setIsOpen(true);
    scrollController.disabledScroll();
  }

  function closeModal() {
    setIsOpen(false);
   scrollController.enableScroll(); 
  }

  useEffect(() => {
    if (isLoggedIn) {
      setIsActive(favorites.some((item) => item.id === id));
    } else {
      setIsActive(false);
    }
  }, [favorites, id, isLoggedIn]);

  function handleClickReadMore() {
    setReadMore(true);
  }

  function handleClick() {
    if (isLoggedIn) {
      if (isActive) {
        dispatch(deleteTeacher(id));
        setIsActive(false);
      } else {
        dispatch(addTeacher(teachersDetails));
        setIsActive(true);
      }
    }
    if (!isLoggedIn) {
      toast("Please log in", {
        style: {
          backgroundColor: "var(--main-color)",
          color: "#fff",
          padding: "16px",
          fontSize: "18px",
        },
      });
    }
    return;
  }

  return (
    <>
      {isOpen && (
        <ModalBookTrialLesson
          onCloseModal={closeModal}
          isOpen={isOpen}
          name={name}
          surname={surname}
          avatar={avatar_url}
        />
      )}
      <div className={css.container}>
        <div className={css.imgContainer}>
          <img
            className={css.img}
            src={avatar_url ? avatar_url : defaultImg}
            alt={`${name + " " + surname} avatar`}
          />
          <div className={css.greenCircle}></div>
        </div>
        <div className={css.contentContainer}>
          <div className={css.topString}>
            <div className={css.languagesContainer}>
              <h3 className={css.detailsTitle}>Languages</h3>
              <div className={css.statisticContainer}>
                <div className={css.lessonsOnlineContainer}>
                  <svg className={css.iconBook} width="16" height="16">
                    <use href={`${sprite}#icon-book-open`}></use>
                  </svg>
                  <p className={css.statisticText}>Lessons online</p>
                </div>
                <div className={css.lessonsDoneContainer}>
                  <p className={css.statisticText}>
                    Lessons done: {lessons_done}
                  </p>
                </div>
                <div className={css.ratingContainer}>
                  <svg className={css.iconStar} width="16" height="16">
                    <use href={`${sprite}#icon-star`}></use>
                  </svg>
                  <p className={css.statisticText}>Rating: {rating}</p>
                </div>
                <div className={css.priceContainer}>
                  <p className={css.statisticText}>
                    Price / 1 hour:{" "}
                    <span className={css.selectPrice}>{price_per_hour}$</span>
                  </p>
                </div>
              </div>
            </div>
            <button className={css.heartBtn} onClick={handleClick}>
              <svg
                className={isActive ? css.favoritHeatIcon : css.iconHeart}
                width="26"
                height="26"
              >
                <use href={`${sprite}#icon-heart`}></use>
              </svg>
            </button>
            <Toaster />
          </div>

          <h2 className={css.title}>{name + " " + surname}</h2>
          <div className={css.detailsContainer}>
            <div className={css.detailsItemContainer}>
              <h3 className={css.detailsTitle}>Speaks:</h3>
              <p className={css.underlinedText}> {languages.join(", ")}</p>
            </div>
            <div className={css.detailsItemContainer}>
              <h3 className={css.detailsTitle}>Lesson Info:</h3>
              <p className={css.text}>{lesson_info}</p>
            </div>
            <div className={css.detailsItemContainer}>
              <h3 className={css.detailsTitle}>Conditions:</h3>
              <p className={css.text}>{conditions.join(" ")}</p>
            </div>
          </div>

          {!readMore && (
            <button
              type="button"
              className={css.readMoreBtn}
              onClick={handleClickReadMore}
            >
              Read more
            </button>
          )}

          {readMore && (
            <div className={css.readMoreContainer}>
              <p className={css.experienceText}>{experience}</p>
              {reviews && reviews.length > 0 && (
                <ul className={css.reviewsList}>
                  {reviews.map((item, index) => {
                    return (
                      <li key={index}>
                        <ReviewItem reviewsDetails={item} />
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          )}

          {levels && levels.length > 0 && (
            <ul className={css.levelsList}>
              {levels.map((item, index) => {
                return (
                  <li key={index}>
                    <LevelItem
                      level={item}
                      isSelect={
                        levelOption && item === levelOption.value ? true : false
                      }
                    />
                  </li>
                );
              })}
            </ul>
          )}

          {readMore && (
            <button
              type="button"
              className={css.bookTrialBtn}
              onClick={openModal}
            >
              Book trial lesson
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TeacherItem;
