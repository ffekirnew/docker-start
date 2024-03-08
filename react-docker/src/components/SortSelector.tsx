import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { orderingFields } from "../shared/services/game-service";
import useGameQueryStore from "../state-management/stores/gameQueryStore";

const SortSelector = () => {
  const ordering = useGameQueryStore(s => s.gameQuery.ordering);
  const setOrdering = useGameQueryStore(s => s.setOrdering);

  return <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}> Order By: { ordering?.label || 'Relevance'}</MenuButton>
    <MenuList>
      { orderingFields.map((ordering, index) => <MenuItem key={index} onClick={() => setOrdering(ordering)}>{ ordering.label }</MenuItem>) }
    </MenuList>
  </Menu>
}

export default SortSelector;
