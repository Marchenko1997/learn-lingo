import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import Loader from "../Loader/Loader";
import FilteredMenu from "../FilteredMenu/FilteredMenu";
import TeachersList from "../TeachersList/TeachersList";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { fetchTeachersForPagination } from "../../redux/teachers/operations";
import { getAllTeachers } from "../../services/apiTeachers";
import { fetchAllTeachers } from "../../redux/teachers/operations";
import {
  selectTeachersItems,
  selectTeachersLastKey,
  selectTeachersLoading,
  selectFilteredTeachers,
  selectLangOption,
  selectLevelOption,
  selectPriceOption,
} from "../../redux/teachers/selectors";
import {
  setSelectedLangOption,
  setSelectedLevelOption,
  setSelectedPriceOption,
} from "../../redux/teachers/slice";
import css from "./TheachersPageContent.module.css";

const TheachersPageContent = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [perfilteredPage, setPerFilteredPage] = useState(4);
  const [hasMore, setHasMore] = useState(true);
  const [hasFilteredMore, setHasFilteredMore] = useState(true);
  const [filteredList, setFilteredList] = useState([]);

  const perPage = 4;

  const teachers = useSelector(selectTeachersItems);
  const filteredTeachers = useSelector(selectFilteredTeachers);
  const lastKey = useSelector(selectTeachersLastKey);
  const loader = useSelector(selectTeachersLoading);

  const langOption = useSelector(selectLangOption);
  const levelOption = useSelector(selectLevelOption);
  const priceOption = useSelector(selectPriceOption);

  const noSelectedFilters = !langOption && !levelOption && !priceOption;

  useEffect(() => {
    if (!noSelectedFilters) {
      dispatch(fetchAllTeachers());
    }
  }, [dispatch, noSelectedFilters]);

  useEffect(() => {
    if (!noSelectedFilters) {
      setFilteredList(filteredTeachers.slice(0, perfilteredPage));
    }
  }, [perfilteredPage, filteredTeachers, noSelectedFilters]);

  useEffect(() => {
    const settingHasMore = async () => {
      const data = await getAllTeachers();
      setHasMore(
        data &&
          data.length > 0 &&
          data.length > perPage &&
          page < data.length / perPage
          ? true
          : false
      );
    };

    settingHasMore();
  }, [page]);

  useEffect(() => {
    const settingFilteredHasMore = async () => {
      setHasFilteredMore(
        filteredTeachers.length > 0 &&
          filteredTeachers.length > perPage &&
          perfilteredPage / perPage < filteredTeachers.length / perPage
          ? true
          : false
      );
    };

    settingFilteredHasMore();
  }, [perfilteredPage, filteredTeachers.length]);

  useEffect(() => {
    if (teachers.length === 0) {
      dispatch(fetchTeachersForPagination(null));
    }
  }, [dispatch, teachers.length]);

  const handleFilteredLoadMore = () => {
    setPerFilteredPage((prev) => prev + 4);
  };

  const handleLoadMore = () => {
    if (lastKey) {
      setPage(page + 1);
      dispatch(fetchTeachersForPagination(Number(lastKey) + 1));
    }
  };

  const listToRender = noSelectedFilters ? teachers : filteredList;

  const handleLangChange = (option) => {
    dispatch(setSelectedLangOption(option));
  };

  const handleLevelChange = (option) => {
    dispatch(setSelectedLevelOption(option));
  };

  const handlePriceChange = (option) => {
    dispatch(setSelectedPriceOption(option));
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.listContainer}>
          <FilteredMenu
            langOption={langOption}
            levelOption={levelOption}
            priceOption={priceOption}
            handleLangChange={handleLangChange}
            handleLevelChange={handleLevelChange}
            handlePriceChange={handlePriceChange}
          />
          {
            <TeachersList
              list={listToRender}
              active={false}
              levelOption={levelOption}
            />
          }
          {loader && <Loader />}
        </div>
        {!loader && noSelectedFilters && hasMore && (
          <LoadMoreBtn handleClick={handleLoadMore} />
        )}
        {!loader && !noSelectedFilters && hasFilteredMore && (
          <LoadMoreBtn handleClick={handleFilteredLoadMore} />
        )}
      </div>
    </>
  );
};

export default TheachersPageContent;
