import { List, ListItem } from "@chakra-ui/react";
import { Genre } from "../shared/services/genre-service"
import { Platform } from "../shared/services/platform-service"

interface Props {
  platforms?: { platform: Platform; }[];
  genres?: Genre[];
}
const PlatformsGenresList = ({ platforms, genres }: Props) => {
  return (<>
    <List>
      { platforms && platforms.map(({ platform }) => <ListItem fontSize={'xl'} key={platform.id}>
        {platform.name}
      </ListItem>) }
      { genres && genres.map((genre) => <ListItem fontSize={'xl'} key={genre.id}>
        {genre.name}
      </ListItem>) }
    </List>
  </>)
}

export default PlatformsGenresList
