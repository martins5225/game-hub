import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Game } from '../hooks/useGames';

import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import { GameQuery } from '../App';
import React from 'react';

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

  return (
    <Box padding="10px">
      {error && <Text>{error.message}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}  spacing={8}>
        {isLoading && renderSkeletons}
        {renderGames}
      </SimpleGrid>

      {hasNextPage && (
        <Button onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'Loading...' : 'Load More'}</Button>
      )}
    </Box>
  );
};

export default GameGrid;
