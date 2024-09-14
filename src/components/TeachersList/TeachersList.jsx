import TeacherItem from "../TeacherItem/TeacherItem";
import css from "./TeachersList.module.css";

const TeachersList = ({ list, active, levelOption }) => {
  return (
    <div className={css.listContainer}>
      {list && list.length > 0 ? (
        <ul className={css.list}>
          {list.map((item) => {
            return (
              <li className={css.item} key={item.id}>
                <TeacherItem
                  teachersDetails={item}
                  active={active}
                  levelOption={levelOption}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={css.noListContainer}>
          <p className={css.text}>There are no teachers yet.</p>
        </div>
      )}
    </div>
  );
};

export default TeachersList;
