import { FetchResponse } from '../services/api-client';
import apiClient from '../services/api-client';
import platforms from '../data/platforms';
import { useQuery } from '@tanstack/react-query';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: async () => {
			const res = await apiClient.get<FetchResponse<Platform>>(
				'/platforms/list/parents'
			);
			return res.data;
		},
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { count: platforms.length, results: platforms },
	});

export default usePlatforms;
