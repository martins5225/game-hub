import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		document.title = 'Game Hub';
	});

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`, //1024px
			}}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside">Aside</GridItem>
			</Show>
			<GridItem area="main">
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
