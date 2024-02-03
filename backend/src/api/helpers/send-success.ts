import { Response } from 'express';
import { ApiResponseData } from './api-response-data.ts';
import { getAccessControlAllowOrigin } from './cors.ts';

export function sendSuccess<TData = unknown>(
    response: Response,
    data: ApiResponseData<TData>,
) {
    response
        .status(data.status)
        .header('Access-Control-Allow-Origin', getAccessControlAllowOrigin())
        .send({
            success: true,
            data: data.data,
        });
}
