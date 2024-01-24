import { Response } from 'express';
import { ApiResponseData } from './api-response-data.js';

export function sendSuccess<TData = unknown>(
    response: Response,
    data: ApiResponseData<TData>,
) {
    response.status(data.status).send({
        success: true,
        data: data.data,
    });
}
