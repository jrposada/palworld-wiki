import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { ApiResponse } from 'shared/models/api-response';
import { Pal } from 'shared/models/pal';
import { Query } from 'shared/models/query';

export type UseGetPalsParams = {
    filter: {
        ability: Partial<Record<keyof Pal['abilities'], boolean>>;
    };
};

export const useGetPals: (
    params: UseGetPalsParams,
) => UseQueryResult<Pal[], Error> = (params) =>
    useQuery({
        queryKey: ['pals', { ...params }],
        queryFn: async () => {
            const query = new Query();

            Object.entries(params.filter.ability)
                .filter(([_, value]) => value)
                .forEach(
                    ([ability]) => void query.filter(`abilities.${ability}`),
                );

            const response: ApiResponse<Pal[]> = await (
                await fetch(`${import.meta.env.VITE_API_BASE_URL}/pals${query}`)
            ).json();

            return response.data ?? [];
        },
    });
