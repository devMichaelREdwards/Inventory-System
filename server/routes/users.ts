import express from 'express';
import User from '../models/user';

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find().exec();
    res.status(200).json({ users });
});

router.get('/:id', async (req, res) => {
    const user = await User.find({ id: parseInt(req.params.id) }).exec();
    res.status(200).json(user);
});

router.param('id', (req, res, next, id) => {
    // Do whatever code is needed here
    res.locals.user = { name: 'I am a name' };
    next(); // Call next to continue on past middleware
});

export default router;
