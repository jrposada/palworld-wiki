import { Request, Response } from 'express';
import { ApiError } from './api-error.js';
import { ApiResponseData } from './api-response-data.js';
import { sendError } from './send-error.js';
import { sendSuccess } from './send-success.js';

export function apiHandler<TQuery, TData, TResponseData>(
    handler: (
        query: TQuery,
        data: TData,
    ) =>
        | Promise<ApiResponseData<TResponseData>>
        | ApiResponseData<TResponseData>,
    validate: (
        query: Request['query'],
        data: TData,
    ) => { data: TData; query: TQuery },
) {
    return async function (request: Request, response: Response) {
        try {
            const { data, query } = validate(request.query, request.body);
            const result = await handler(query, data);
            sendSuccess(response, result);
        } catch (error) {
            console.log(error);

            if (error instanceof ApiError) {
                sendError(response, error);
                return;
            }

            sendError(response, new ApiError(500, 'Unknown error'));
        }
    };
}
