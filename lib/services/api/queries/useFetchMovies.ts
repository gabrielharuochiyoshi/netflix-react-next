import { useQuery } from "react-query";
import { axiosInstance } from "../axios";


const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const getMovies = async () => {
  const {data} = await axiosInstance.get(`${BASE_URL}/trending/all/week`, { params: {
           api_key: API_KEY,
    }
  })
  return data;

};

const useFetchMovies = () => {
  return useQuery(
    "ALL_MOVIES",
    () =>
      getMovies(),
  );
};

export { useFetchMovies, getMovies };
