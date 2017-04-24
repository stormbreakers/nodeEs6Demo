"use strict";
import express from 'express';
import {getAbout} from '../controller/AboutController';

const router = express.Router();

// Arrow functions
router.get('/', (req, res) => {
    res.send({message: 'Hello World!!'});
});

// about
{
    router.get('/about', (req, res) => {
        getAbout()
            .then((result) => {
                res.send(result);
            });
    });
}

// Exporting an object as the default import for this module
export default router;