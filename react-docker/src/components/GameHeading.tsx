import { Heading } from "@chakra-ui/react"
import usePlatform from "../shared/hooks/usePlatform";
import useGenre from "../shared/hooks/useGenre";
import useGameQueryStore from "../state-management/stores/gameQueryStore";


const GameHeading = () => { 
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const genre = useGenre(genreId);


  return <Heading as={'h1'} fontSize={'5xl'} marginBottom={5}>
    { platformId && platform + " " }
    { genreId && genre + " " }
    Games
  </Heading>
}

export default GameHeading
