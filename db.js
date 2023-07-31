import { connect } from 'mongoose';
require('dotenv').config();


connect(process.env.mongo_URL).then(
    () => {
        console.log('Connected to database');
    }
).catch((err) => {
    console.log('Error connecting to database ' + err);
})