import { HStack, Switch, useColorMode } from '@chakra-ui/react'
import { BsMoon, BsSun } from 'react-icons/bs'

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return <HStack>
    <BsSun />
    <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    <BsMoon />
  </HStack>
}

export default ColorModeSwitch
