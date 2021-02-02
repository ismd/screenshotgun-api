import express from 'express';
import {upload} from './lib';

const app = express();
const port = 3000;

app.get('/_/upload', async (_req, res) => {
    const result = await upload();
    res.send(result);
});

app.use((_req, res) => {
    res.status(404);
    res.send();
});

app.listen(port);
