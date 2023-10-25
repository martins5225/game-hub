import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import { Genre } from './hooks/useGenre';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import { Platform } from './hooks/usePlatforms';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder: string;
	searchText: string;
}

function App() {
	useEffect(() => {
		document.title = 'Game Hub';
	});

	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`, //1024px
			}}
			templateColumns={{ base: '1fr', lg: '200px 1fr' }}
		>
			<GridItem area="nav">
				<NavBar
					onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
				/>
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList
						selectedGenreId={gameQuery.genreId}
						onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<GameHeading gameQuery={gameQuery} />
				<Flex paddingLeft={10}>
					<Box marginRight={5}>
						<PlatformSelector
							selectedPlatformId={gameQuery.platformId}
							onSelectPlatform={(platform) =>
								setGameQuery({ ...gameQuery, platformId: platform.id })
							}
						/>
					</Box>

					<SortSelector
						sortOrder={gameQuery.sortOrder}
						onSelectSortOrder={(sortOrder) =>
							setGameQuery({ ...gameQuery, sortOrder })
						}
					/>
				</Flex>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
