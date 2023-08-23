import mongoose from 'mongoose';
import { IUserExample } from '../types/user';

const userSchema = new mongoose.Schema<IUserExample>({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String
});

const User = mongoose.model<IUserExample>('User', userSchema);
export default User;
