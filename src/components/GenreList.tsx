import {
	Button,
	HStack,
	Heading,
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
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre: Genre) => (
					<ListItem key={genre.id} paddingY="8px">
						<HStack spacing={4}>
							<Image
								boxSize="32px"
								borderRadius={8}
								objectFit="cover"
								src={genre.image_background}
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
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
		</>
	);
};

export default GenreList;
