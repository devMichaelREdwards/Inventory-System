import express from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { IUser } from '../types/user';
import { AuthRequest } from '../types/request';

export const authenticateToken = (
    req: AuthRequest,
    res: express.Response,
    next: express.NextFunction
) => {
    if (!process.env.ACCESS_TOKEN_SECRET) return;
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        req.user = user;
        next();
    });
};

export const generateAccessToken = (user: IUser) => {
    if (!process.env.ACCESS_TOKEN_SECRET) return null;
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15m'
    });
};

export const generateRefreshToken = (user: IUser) => {
    if (!process.env.REFRESH_TOKEN_SECRET) return null;
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
};

export const verifyToken = (
    token: string,
    req: AuthRequest,
    res: express.Response,
    next: express.NextFunction
) => {
    if (!process.env.REFRESH_TOKEN_SECRET) return null;
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        req.user = user;
        next();
    });
};
