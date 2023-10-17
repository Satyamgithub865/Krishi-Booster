import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import Connection from './database/db.js';
import { defaultData } from './controller/product-controller.js';
import router from './routes/Route.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router);

Connection();

const PORT = 8000;
app.listen(PORT, () => { console.log(`Successfully running on port ${PORT}`) });

defaultData();