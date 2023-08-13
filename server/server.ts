import express from 'express';
import users from './routes/users';

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello' });
});

app.use('/users', users);

app.listen(9000);
