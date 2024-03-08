import GameHeading from '../components/GameHeading'
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import PlatformMenu from '../components/PlatformMenu'
import SortSelector from '../components/SortSelector'
import Games from '../components/Games'
import GenreList from '../components/GenreList'

const HomePage = () => {
return (<Grid 
    templateAreas={{
      base: `"main"`,
      lg: `"aside main"`
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr"
    }}
  >
    <Show above='lg'>
      <GridItem area={"aside"} paddingX={5}>
        <GenreList />
      </GridItem>
    </Show>

    <GridItem area={"main"} paddingX={5}>
      <GameHeading />
      <HStack spacing={2} marginBottom={5}>
        <PlatformMenu />
        <SortSelector />
      </HStack>
      <Games />
    </GridItem>
  </Grid>);
}

export default HomePage
