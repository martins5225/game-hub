import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import { useEffect, useState } from 'react';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenre';
import PlatformSelector from './components/PlatformSelector';

function App() {
	useEffect(() => {
		document.title = 'Game Hub';
	});

	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`, //1024px
			}}
			templateColumns={{ base: '1fr', lg: '200px 1fr' }}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList
						selectedGenre={selectedGenre}
						onSelectGenre={(genre) => setSelectedGenre(genre)}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<PlatformSelector />
				<GameGrid selectedGenre={selectedGenre} />
			</GridItem>
		</Grid>
	);
}

export default App;
