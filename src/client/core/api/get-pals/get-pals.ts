import { useQuery } from '@tanstack/react-query';

export const useGetPals = () => {
    return useQuery({
        queryKey: ['pals'],
        queryFn: () => fetch('/api/pals').then((res) => res.json()),
    });
};
