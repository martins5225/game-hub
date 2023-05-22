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
}

const GenreList = ({ onSelectGenre }: Props) => {
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
