import { SimpleGrid, Spinner } from '@chakra-ui/react';

import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import { GameQuery } from '../App';
import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';
import useGames from '../hooks/useGames';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);

  const renderSkeletons = Array.from({ length: 16 }).map((_, index) => (
    <GameCardContainer key={index}>
      <GameCardSkeleton />
    </GameCardContainer>
  ));

  const renderGames = data?.pages.map((page, index) => (
    <React.Fragment key={index}>
      {page.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </React.Fragment>
  ));

const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (

      <InfiniteScroll hasMore={!!hasNextPage} dataLength={fetchedGamesCount} next={() => fetchNextPage()} loader={<Spinner/>}>
        

      <SimpleGrid  padding="10px" columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}  spacing={8}>
        {isLoading && renderSkeletons}
        {renderGames}
      </SimpleGrid>
      </InfiniteScroll>
  
  );
};

export default GameGrid;
