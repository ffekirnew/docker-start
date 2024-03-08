import { HStack, Image, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo_light_background.svg';
import logoDark from '../assets/logo_dark_background.svg';

import ColorModeSwitch from './ColorModeSwitch';
import SearchBox from './SearchBox';

const NavBar = () => {
  const { colorMode } = useColorMode();

  return <HStack height={'80px'} spacing={5} paddingX={5}>
    <Link to={'/'}><Image src={ colorMode === "dark" ? logoDark : logoWhite} boxSize={'40px'} borderRadius={5}/></Link>
    <SearchBox />
    <ColorModeSwitch />
  </HStack>
}

export default NavBar;
