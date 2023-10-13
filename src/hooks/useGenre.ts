import APIClient from '../services/api-client';
import { FetchResponse } from '../services/api-client';
import genres from '../data/genre';
import { useQuery } from '@tanstack/react-query';

const apiClient = new APIClient<Genre>('/genre')
export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { count: genres.length, results: genres },
	});

export default useGenres;
