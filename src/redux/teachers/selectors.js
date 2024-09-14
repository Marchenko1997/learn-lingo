
export const selectTeachersItems = (state) => state.teachers.items;
export const selectTeachersLastKey = (state) => state.teachers.lastKey;

export const selectTeachersLoading = (state) => state.teachers.loading;
export const selectTeachersError = (state) => state.teachers.error;

//-------------------------------- selectsFiltered--------------------------------

export const selectLangOption = (state) => state.teachers.selectedLangOption;
export const selectLevelOption = (state) => state.teachers.selectedLevelOption;
export const selectPriceOption = (state) => state.teachers.selectedPriceOption;
export const selectAllTeachers = (state) => state.teachers.filteredItems;
