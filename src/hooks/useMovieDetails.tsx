import {useState, useEffect} from 'react';
import movieDB from '../API/movieDB';
import {Cast, CreditsResponse} from '../interfaces/creditInterface';
import {FullMovie} from '../interfaces/movieInterfaces';
interface MovieDetails {
  isLoading: boolean;
  cast: Cast[];
  fullMovie?: FullMovie;
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    fullMovie: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<FullMovie>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsRes, castRes] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      fullMovie: movieDetailsRes.data,
      cast: castRes.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
