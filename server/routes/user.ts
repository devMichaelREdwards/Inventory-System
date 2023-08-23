import express from 'express';
import {
    generateAccessToken,
    generateRefreshToken,
    verifyToken
} from '../helpers/jwt';
import { IUser } from '../types/user';

const router = express.Router();

router.get('/login', async (req, res) => {
    // Authenticate User

    const username = req.body.username;
    const user: IUser = { name: username };
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    res.json({ accessToken, refreshToken });
});

router.post('/refresh', async (req, res, next) => {
    const refreshToken: string = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);
    // Check if DB has refresh token

    // If not send 403

    if (!process.env.REFRESH_TOKEN_SECRET) return res.sendStatus(403);
    verifyToken(refreshToken, req, res, next);
});

router.delete('/logout', async (req, res) => {
    // Delete refresh token from DB here
});

export default router;
