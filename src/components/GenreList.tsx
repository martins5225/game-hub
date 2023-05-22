import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenre';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
	const { data, isLoading } = useGenres();

	if (isLoading) return <Spinner />;
	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={genre.image_background}
						/>
						<Button
							fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
							onClick={() => {
								onSelectGenre(genre);
							}}
							fontSize="lg"
							variant="link"
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
