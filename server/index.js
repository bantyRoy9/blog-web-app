import express from 'express'
import DBconnection from './database/db.js';
import Router from '../server/router/route.js'
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/',Router)


const POST = 8000;

app.listen (POST, ()=>console.log(`server is running successfully on port ${POST}`));

DBconnection();