import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { ApiResponse } from '../../../../models/api-response';
import { Pal } from '../../../../models/pal';

export const useGetPals: () => UseQueryResult<Pal[], Error> = () => {
    return useQuery({
        queryKey: ['pals'],
        queryFn: () =>
            fetch('/api/pals').then(
                async (res) => ((await res.json()) as ApiResponse<Pal[]>).data,
            ),
    });
};
