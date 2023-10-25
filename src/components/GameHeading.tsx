import { GameQuery } from '../App';
import { Heading } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import platforms from '../data/platforms';
import useGenres from '../hooks/useGenre';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
	gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {

	const  {data: genres} = useGenres()
	const genre = genres?.results.find(g => g.id === gameQuery.genreId)

	const { data: Platforms } = usePlatforms();
	const platform = Platforms?.results.find(p => p.id === gameQuery.platformId)
	
	const heading = `${platform?.name || ''} ${
		genre?.name || ''
	} Games`;
	return (
		<Heading as="h1" fontSize="4xl" paddingLeft={10} marginBottom={5}>
			{heading}{' '}
		</Heading>
	);
};

export default GameHeading;
