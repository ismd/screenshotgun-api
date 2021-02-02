import express from 'express';
import {upload} from './lib/upload';

const app = express();
const port = process.env.PORT || 80;

app.post('/_/upload', async (_req, res) => {
    const result = await upload();
    res.json(result);
});

app.get('/ping', (_req, res) => {
    res.send('ok');
})

app.use((_req, res) => {
    res.sendStatus(404);
});

app.listen(port);
