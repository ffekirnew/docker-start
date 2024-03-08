import { Genre } from "../services/genre-service";
import useGenres from "./useGenres";;;;

const useGenre = (genreId?: number) => {
  const { data } = useGenres();
  return data?.results?.find((genre: Genre) => genre.id === genreId)?.name || null;
} 

export default useGenre;
