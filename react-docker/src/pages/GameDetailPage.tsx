import { useParams } from "react-router-dom"
import useGameDetail from "../shared/hooks/useGameDetail";
import { Heading, Spinner, Flex, Grid, GridItem } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameDetailAttribute from "../components/GameDetailAttribute";
import GameCriticBadge from "../components/GameCriticBadge";
import PlatformsGenresList from "../components/PlatformsGenresList";

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, error, isLoading } = useGameDetail(params.slug);

  if (isLoading) return <Spinner />

  if (error || !game) throw error;

  return (<Flex flexDirection={'column'} gap={5} padding={5}>
    <Heading as={'h1'} fontSize={'5xl'} fontWeight={'extrabold'}>{ game.name }</Heading>
    <ExpandableText text={ game.description_raw } />
    <Grid gap={2} templateAreas={`"platforms metascore"
                          "genres publishers"
                          "series series"`}>
      <GridItem area={'platforms'}>
        <GameDetailAttribute detailTitle={"Platforms"}>
          <PlatformsGenresList platforms={game.parent_platforms}/>
        </GameDetailAttribute>
      </GridItem>
      <GridItem area={'metascore'}>
        <GameDetailAttribute detailTitle={"Metascore"}>
          <GameCriticBadge metacritic={game.metacritic} />
        </GameDetailAttribute>
      </GridItem>
      <GridItem area={'genres'}>
        <GameDetailAttribute detailTitle={"Genres"}>
          <PlatformsGenresList genres={game.genres} />
        </GameDetailAttribute>
      </GridItem>
      <GridItem area={'publishers'}>
        <GameDetailAttribute detailTitle={"Publishers"}>Publishers</GameDetailAttribute>
      </GridItem>
      <GridItem area={'series'}></GridItem>
    </Grid>
  </Flex>);
}

export default GameDetailPage;
