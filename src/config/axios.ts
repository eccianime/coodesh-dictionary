import axios from "axios";

export const DICTIONARY_URL =
  "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const axiosRequest = async (url: string) => {
  try {
    const response = await axios.request({
      method: "GET",
      url,
      timeout: 15000,
    });
    return response.data;
  } catch (error: any) {
    console.log(error?.response?.data);
    return null;
  }
};
