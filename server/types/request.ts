import { Request } from 'express';

export interface RequestData extends Request {
    [key: string]: any;
}
