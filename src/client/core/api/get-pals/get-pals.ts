import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { ApiResponse } from '../../../../models/api-response';
import { Drop } from '../../../../models/drop';
import { Pal } from '../../../../models/pal';

export type UseGetPalsParams = {
    filter: {
        ability: Partial<Record<keyof Pal['abilities'], boolean>>;
        drop: Partial<Record<Drop, boolean>>;
    };
};

export const useGetPals: (
    params: UseGetPalsParams,
) => UseQueryResult<Pal[], Error> = (params) => {
    return useQuery({
        queryKey: ['pals', { ...params }],
        queryFn: async () => {
            console.log(params);
            const response: ApiResponse<Pal[]> = await (
                await fetch('/api/pals')
            ).json();

            return response.data;
        },
    });
};
