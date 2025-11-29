import { Router, Request, Response } from 'express';
import db from '../db';
import { generateShortCode } from '../utils/shortCodeGenerator';

const router = Router();

router.post('/urls', async (req: Request, res: Response) => {
    const { long_url } = req.body;

    try {

        // Проверяем существующий URL
        const existing = await db('urls')
            .where({ long_url })
            .first();

        if (existing) {
            return res.status(200).json({
                message: 'URL уже существует',
                short_code: existing.short_code
            });
        }
        // Создаём новый
        const short_code = generateShortCode();
        const [url] = await db('urls')
            .insert({ long_url, short_code })
            .returning('*');

        res.status(201).json(url);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при сохранении URL' });
    }
});

router.get('/l/:shortCode', async (req: Request, res: Response) => {
    const { shortCode } = req.params;

    try {
        const url = await db('urls')
            .where({ short_code: shortCode })
            .first();

        if (!url) {
            return res.status(404).json({ message: 'URL не найден' });
        }

        res.redirect(301, url.long_url); // редирект на длинную ссылку
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при поиске URL' });
    }
});

export default router;