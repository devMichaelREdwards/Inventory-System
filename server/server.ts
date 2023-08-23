import express from 'express';
import * as dotenv from 'dotenv';
import connectDatabase from './config/database';
import users from './routes/users';
import user from './routes/user';

dotenv.config();

connectDatabase();

const app = express();

app.use(express.json());

if (!process.env.PORT) {
    process.exit(1);
}

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello world!!!!!' });
});

app.use('/users', users); // User example routes(this will go away...)
app.use('/user', user); // Website user routes

app.listen(process.env.PORT);
