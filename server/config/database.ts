import mongoose, { connect } from 'mongoose';

const connectDatabase = async () => {
    try {
        if (!process.env.DATABASE_URI)
            throw new Error('No Database connection string configured');
        await mongoose.connect(process.env.DATABASE_URI);
    } catch (err) {
        console.log(err);
    }
};

export default connectDatabase;
