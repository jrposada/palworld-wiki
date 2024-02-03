import { Response } from 'express';
import { ApiError } from './api-error.ts';
import { getAccessControlAllowOrigin } from './cors.ts';

export function sendError<TError>(response: Response, error: ApiError<TError>) {
    response
        .status(error.status)
        .header('Access-Control-Allow-Origin', getAccessControlAllowOrigin())
        .send({
            success: false,
            error: error.message,
        });
}
