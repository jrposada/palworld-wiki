import { Response } from 'express';
import { ApiError } from './api-error.js';

export function sendError<TError>(response: Response, error: ApiError<TError>) {
    response.status(error.status).send({
        success: false,
        error: error.message,
    });
}
