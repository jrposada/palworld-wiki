import { Request, Response } from 'express';
import { ApiError } from './api-error.js';
import { ApiResponseData } from './api-response-data.js';
import { sendError } from './send-error.js';
import { sendSuccess } from './send-success.js';

export function apiHandler<TData, TResponseData>(
    handler: (data: TData) => ApiResponseData<TResponseData>,
    validate: (data: TData) => void,
) {
    return async function (request: Request, response: Response) {
        try {
            validate(request.body);
            const result = await handler(request.body);
            sendSuccess(response, result);
        } catch (error) {
            if (error instanceof ApiError) {
                sendError(response, error);
                return;
            }

            sendError(response, new ApiError(500, 'Unknown error'));
        }
    };
}
