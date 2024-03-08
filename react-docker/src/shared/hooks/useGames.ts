import { Game } from '../services/game-service';
import gameService from '../services/game-service';
import { FetchResponse } from '../services/api-client';
import { useInfiniteQuery } from '@tanstack/react-query';
import useGameQueryStore from '../../state-management/stores/gameQueryStore';

function useGames() {
  const gameQuery = useGameQueryStore(s => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => gameService.getAll({ params: {
      page: pageParam,
      genres: gameQuery?.genreId,
      parent_platforms: gameQuery?.platformId,
      ordering: gameQuery?.ordering?.value,
      search: gameQuery?.searchQuery
    }}),
    staleTime: 10 * 60 * 1000, // 10 minutes
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next !== null ? allPages.length + 1 : undefined;
    }
  });
}

export default useGames;
