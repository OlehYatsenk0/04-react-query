import axios from 'axios';
import type { MovieApiResponse } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string, page: number): Promise<MovieApiResponse> => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      include_adult: false,
      language: 'en-US',
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/json',
    },
  });

  return response.data;
};