import express, { Request, Response } from 'express';
import urlRouter from './routes/url';

const app = express();
app.use(express.json());
app.use(urlRouter);


app.get('/ping', (req: Request, res: Response) => {
    res.status(200).json({ message: "pong" });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});