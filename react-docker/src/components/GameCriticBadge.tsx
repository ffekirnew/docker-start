import { Badge } from '@chakra-ui/react'

interface Props {
  metacritic: number
}

const GameCriticBadge = ({ metacritic }: Props) => {
  const color = metacritic > 90 ? 'green' : metacritic > 60 ? 'yellow' : ''

  return <Badge fontSize='14px' borderRadius={'5px'} paddingX={2} colorScheme={color}>
    { metacritic }
  </Badge>
}

export default GameCriticBadge
