import mongoose from "mongoose";

const Connection = async () => {
    const URL = ''

    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Eroor while connection to database', error);
    }
}

export default Connection;
