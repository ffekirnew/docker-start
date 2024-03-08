import { useQuery } from "@tanstack/react-query";
import gameService, { Game } from "../services/game-service";

function useGameDetail(slug?: string) {
  return useQuery<Game, Error>({
    queryKey: ["genres", slug],
    queryFn: () => gameService.getDetails(slug),
    staleTime: 24 * 60 * 60 * 1000
  });
}

export default useGameDetail;
