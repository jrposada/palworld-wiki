import sendError from './send-error.js';
import sendSuccess from './send-success.js';

export function apiHandler(handler, validate) {
    return async function (request, response) {
        try {
            validate(request.body);
            const result = await handler(request.body, response);
            sendSuccess(response, result);
        } catch (error) {
            sendError(response, error);
        }
    };
}
