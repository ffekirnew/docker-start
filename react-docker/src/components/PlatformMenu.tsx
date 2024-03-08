import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../shared/hooks/usePlatforms"
import usePlatform from "../shared/hooks/usePlatform"
import useGameQueryStore from "../state-management/stores/gameQueryStore"

const PlatformMenu = () => {
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore(s => s.setPlatformId);

  const { data } = usePlatforms() 

  return <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>{ usePlatform(platformId) || 'Platforms'}</MenuButton>
    <MenuList>
      { data?.results?.map(platform => <MenuItem key={platform.id} onClick={() => setPlatformId(platform.id)}>{ platform.name }</MenuItem>) }
    </MenuList>
  </Menu>
}

export default PlatformMenu
