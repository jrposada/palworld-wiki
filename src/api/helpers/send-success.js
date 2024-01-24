export default function success(response, data) {
    response.status(data.status).send({
        success: true,
        data: data.data,
    });
}
