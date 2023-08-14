import express from 'express';
import * as dotenv from 'dotenv';
import users from './routes/users';

dotenv.config();
const app = express();

if (!process.env.PORT) {
    process.exit(1);
}

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello world!!!!!' });
});

app.use('/users', users);

app.listen(9000);
