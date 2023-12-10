/* @flow */

import axios from '@/lib/axios';
import {useQuery} from '@tanstack/react-query';

const getYahooConnection = async () => {
    return await axios.get('api/yahoo/account-status').then((res) => res.data);
};

type UseGetYahooConnection = {
    connection: any,
    isLoading: boolean,
    errorMessage: ?string,
};

export function useGetYahooConnection(): UseGetYahooConnection {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['yahooConnection'],
        queryFn: getYahooConnection,
    });

    return {
        connection: data,
        isLoading: isLoading,
        errorMessage: isError
            ? 'Couldn’t load Yahoo Connection, something went wrong.'
            : null,
    };
}
