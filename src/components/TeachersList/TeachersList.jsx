import TeacherItem from "../TeacherItem/TeacherItem";
import css from "./TeachersList.module.css";
import { v4 as uuidv4 } from "uuid";

const TeachersList = ({ list, active, levelOption }) => {
  
  return (
    <div className={css.listContainer}>
      {list && list.length > 0 ? (
        <ul className={css.list}>
          {list.map((item) => {
            return (
              <li className={css.item} key={uuidv4()}>
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
