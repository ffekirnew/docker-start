import { Link } from 'react-router-dom'
import { SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import useGames from '../shared/hooks/useGames'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const Games = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error)
    return <Text>{error.message}</Text>

  const fetchedGamesCount = data?.pages?.reduce((total, page) => total + page?.results.length, 0)  
  return (<>
    <InfiniteScroll
      dataLength={fetchedGamesCount || 0}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Spinner />} >
      <SimpleGrid spacing={6} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} paddingY={4}>
        { isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>)}
        { data?.pages?.map((page, index) => <React.Fragment key={index}>
          {page?.results.map((game) => <GameCardContainer key={game.id}><Link to={`/games/${game.slug}`}><GameCard game={game}></GameCard></Link></GameCardContainer>)}
        </React.Fragment>) }
      </SimpleGrid>
    </InfiniteScroll>
  </>)
}

export default Games
