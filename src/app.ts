import express from 'express';
const app = express();
const port = 3000;

app.post('/screenshot', (_req, res) => {
    res.send('Hello World!')
});

app.use((_req, res) => {
    res.status(404);
    res.send({
        error: "Not found",
    });
});

app.listen(port, () => {
    console.info(`Example app listening at http://localhost:${port}`)
});
