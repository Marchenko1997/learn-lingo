import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import css from "./FormBookTrialLesson.module.css";
import defaultImage from "../../assets/avatar.webp";

const schema = yup
  .object({
    name: yup
      .string()
      .min(2, "Too Short! Minimum 2 symbols")
      .max(50, "Too Long! Maximum 50 symbols")
      .required("Please enter full name"),
    email: yup
      .string()
      .email("Must be a valid email!")
      .required("Please enter email"),
    tel: yup
      .string()
      .min(10, "Too Short! Minimum 10 symbols")
      .max(50, "Too Long! Maximum 50 symbols")
      .required("Please enter phone number")
      .matches(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, "Number is not valid"),
    radio: yup.string().required("Please select a reason for learning English"),
  })
  .required();

const FormBookTrialLesson = ({ name, surname, avatar, onCloseModal }) => {
  const defaultImg = `${defaultImage}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    onCloseModal();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Book trial lesson</h2>
      <p>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className={css.teacherContainer}>
        <div className={css.imgContainer}>
          <img
            className={css.img}
            src={avatar ? avatar : defaultImg}
            alt={`${name + " " + surname} avatar`}
          />
        </div>
        <div className={css.contentContainer}>
          <h4 className={css.teacherTitle}>Your teacher</h4>
          <div className={css.ratingContainer}>
            <p className={css.nameText}>{name + " " + surname}</p>
          </div>
        </div>
      </div>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={css.formTitle}>
          What is your main reason for learning English?
        </h3>
        <div className={css.radioContainer}>
          <ul className={css.radioList}>
            <li className={css.radioItem}>
              <label className={css.radioLabel}>
                <input
                  className={css.radioInput}
                  type="radio"
                  name="radio"
                  value="Career and business"
                  {...register("radio")}
                />
                <p className={css.radioText}>Career and business</p>
              </label>
            </li>
            <li className={css.radioItem}>
              <label className={css.radioLabel}>
                <input
                  className={css.radioInput}
                  type="radio"
                  name="radio"
                  value="Lesson for kids"
                  {...register("radio")}
                />
                <p className={css.radioText}>Lesson for kids</p>
              </label>
            </li>
            <li className={css.radioItem}>
              <label className={css.radioLabel}>
                <input
                  className={css.radioInput}
                  type="radio"
                  name="radio"
                  value="Living abroad"
                  {...register("radio")}
                />
                <p className={css.radioText}>Living abroad</p>
              </label>
            </li>
            <li className={css.radioItem}>
              <label className={css.radioLabel}>
                <input
                  className={css.radioInput}
                  type="radio"
                  name="radio"
                  value="Exams and coursework"
                  {...register("radio")}
                />
                <p className={css.radioText}>Exams and coursework</p>
              </label>
            </li>
            <li className={css.radioItem}>
              <label className={css.radioLabel}>
                <input
                  className={css.radioInput}
                  type="radio"
                  name="radio"
                  value="Culture, travel or hobby"
                  {...register("radio")}
                />
                <p className={css.radioText}>Culture, travel or hobby</p>
              </label>
            </li>
          </ul>
          {errors.radio && (
            <div className={css.errorContainer}>
              <span className={css.errorMessage}>{errors.radio.message}</span>
            </div>
          )}
        </div>

        <div className={css.formContainer}>
          <label className={css.label}>
            <input
              className={css.input}
              name="name"
              type="text"
              placeholder="Full Name"
              {...register("name", {
                required: true,
                minLength: 2,
                maxLength: 50,
              })}
            />
            {errors.name && (
              <div className={css.errorContainer}>
                <span className={css.errorMessage}>{errors.name.message}</span>
              </div>
            )}
          </label>
          <label className={css.label}>
            <input
              className={css.input}
              name="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div className={css.errorContainer}>
                <span className={css.errorMessage}>{errors.email.message}</span>
              </div>
            )}
          </label>
          <label className={css.label}>
            <input
              className={css.input}
              name="tel"
              type="tel"
              placeholder="Phone number"
              {...register("tel", {
                required: true,
                minLength: 10,
                maxLength: 50,
              })}
            />
            {errors.tel && (
              <div className={css.errorContainer}>
                <span className={css.errorMessage}>{errors.tel.message}</span>
              </div>
            )}
          </label>
        </div>
        <button className={css.bookBtn} type="submit">
          Book
        </button>
      </form>
    </div>
  );
};

export default FormBookTrialLesson;
