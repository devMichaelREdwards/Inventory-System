import { JwtPayload } from 'jsonwebtoken';
import express from 'express';

export interface AuthRequest extends express.Request {
    user?: string | JwtPayload;
}
