import APIClient, { FetchResponse } from '../services/api-client';

import platforms from '../data/platforms';
import { useQuery } from '@tanstack/react-query';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/list/paremts')

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { count: platforms.length, results: platforms },
	});

export default usePlatforms;
