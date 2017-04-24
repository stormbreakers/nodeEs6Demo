"use strict";
import AboutModel from '../model/AboutModel';

let getAbout = () => {
    return AboutModel
        .all();
};

export {getAbout};