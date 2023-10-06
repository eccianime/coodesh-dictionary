import axios from "axios";

export const DICTIONARY_URL =
  "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const WORDS_URL =
  "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json";

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
