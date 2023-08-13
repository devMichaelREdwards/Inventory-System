import express from 'express';
import { RequestData } from '../types/request';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ name: 'test' });
});

router.get('/:id', (req, res) => {
    console.log(res.locals.user);
    res.status(200).json(res.locals.user);
});

router.param('id', (req, res, next, id) => {
    // Do whatever code is needed here
    res.locals.user = { name: 'I am a name' };
    next(); // Call next to continue on past middleware
});

export default router;
