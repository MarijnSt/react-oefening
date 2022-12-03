import axios, { AxiosError, AxiosResponse } from "axios";

const ENDPOINT = "https://randomuser.me/api?results=5";

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
}

const GetRandomUser = async () => {
  try {
    const users = await axios.get(ENDPOINT);
    return users.data.results;
  } catch (error) {
    console.error("error", error);
  }
};

export default GetRandomUser;
