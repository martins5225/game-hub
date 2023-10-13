import { FetchResponse } from '../services/api-client';
import apiClient from '../services/api-client';
import genres from '../data/genre';
import { useQuery } from '@tanstack/react-query';

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: async () => {
			const res = await apiClient.get<FetchResponse<Genre>>('/genres');
			return res.data;
		},
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { count: genres.length, results: genres },
	});

export default useGenres;
