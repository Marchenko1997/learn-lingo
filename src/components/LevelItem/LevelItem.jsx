import css from "./LevelItem.module.css";

const LevelItem = ({ level, isSelect}) => {
  return (
    <div
      className={
        isSelect ? css.levelSelectedItemContainer : css.levelItemContainer
      }
    >
      <p className={css.text}>#{level}</p>
    </div>
  );
}

export default LevelItem