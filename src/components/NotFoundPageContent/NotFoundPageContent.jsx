import notFoudImg from "../../assets/404_page-not-found.png";
import css from "./NotFoundPageContent.module.css";

const NotFoundPageContent = () => {
  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <img className={css.img} src={notFoudImg} alt="Not found page image" />
      </div>
    </div>
  );
};

export default NotFoundPageContent;
