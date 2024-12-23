import apiClient from "./axiosConfig.ts";

export const fetchCountries = async () => {
  const { data } = await apiClient.get("/countries");
  return data;
};

export const fetchSites = async (queryParams: string) => {
  const { data } = await apiClient.get(`/sites?${queryParams}`);
  return data;
};

export const fetchSite = async (id: string) => {
  const { data } = await apiClient.get(`/sites?unique_number=${id}`);
  return data;
};

