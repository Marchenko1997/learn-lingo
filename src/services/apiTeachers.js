import axios from "axios";

export const BASE_URL =
  "https://teacherscollection-da9f7-default-rtdb.europe-west1.firebasedatabase.app/";

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const getAllTeachers = async () => {
  try {
    const results = await instance.get("./teachers.json");
    return results.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTeachersForPaginations = async (lastKey) => {
  try {
    const params = !lastKey
      ? `?orderBy="$key"&limitToFirst=4`
      : `?orderBy="$key"&startAt="${lastKey}"&limitToFirst=4`;


    const results = await instance.get(`./teachers.json${params}`);

    return results.data;
  } catch (error) {
    console.log("Error fetching paginated teachers:", error);
  }
};
