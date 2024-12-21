import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
});

export const setAuthHeaders = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getCampers = async ({ limit = 4, page = 1, filters = {} }) => {
  const params = {
    limit,
    page,
    ...filters, // додаємо фільтри, якщо вони є
  };
  const { data } = await axios.get("", { params });
  // console.log(data);
  return data;
};

export const getCamperById = async (id) => {
  const { data } = await axios.get(`/${id}`);
  return data;
};

export const getAllCampers = async () => {
  const { data } = await axios.get("");
  // console.log(data);
  return data;
};
