import APIClient, { FetchResponse } from '../services/api-client';

import { GameQuery } from '../App';
import { useQuery } from '@tanstack/react-query';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}


const apiClient = new APIClient<Game>('/games')
export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: async () => {
      const response = await apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      });
      return response; // Add this line to return the response
    },
  });


export default useGames;
