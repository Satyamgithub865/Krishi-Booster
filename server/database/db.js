import mongoose from "mongoose";

const Connection = async () => {
    const URL = 'mongodb://satyam865:krishibooster@ac-yzwd2xv-shard-00-00.tcvancz.mongodb.net:27017,ac-yzwd2xv-shard-00-01.tcvancz.mongodb.net:27017,ac-yzwd2xv-shard-00-02.tcvancz.mongodb.net:27017/?ssl=true&replicaSet=atlas-1ctpxd-shard-0&authSource=admin&retryWrites=true&w=majority'

    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Eroor while connection to database', error);
    }
}

export default Connection;