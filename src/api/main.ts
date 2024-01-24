import * as dotenv from 'dotenv';
dotenv.config();

import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import { join } from 'path';
import swaggerJsdoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import { router } from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// ------ Configure swagger docs ------
const options = {
    swaggerDefinition: {
        info: {
            title: 'Palworld Wiki',
            version: '1.0.0',
            // description: "My API for doing cool stuff!",
        },
        basePath: '/api',
    },
    apis: [join(import.meta.url, '/routes/**/*.js')],
};
const swaggerSpecs = swaggerJsdoc(options);

app.use('/api', router);
app.use('/swagger', serve, setup(swaggerSpecs));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
