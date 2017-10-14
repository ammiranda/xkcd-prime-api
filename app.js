import express from 'express';
import request from 'superagent';
import async from 'async';

const app = express();

app.param('page', (req, res, next, page) => {

});

app.get('comics/:page', (req, res, next) => {
    
});

app.listen(4000, () => {
    console.log('Example app on port 4000');
});