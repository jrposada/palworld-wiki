export default function error(response, error) {
    response.status(error.status).send({
        success: false,
        error: error.message,
    });
}
