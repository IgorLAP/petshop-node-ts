"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pet_1 = require("../models/pet");
const search = (req, res) => {
    let name = req.query.q;
    let list = pet_1.Pet.getFromName(name);
    if (!name) {
        res.redirect('/');
        return;
    }
    res.render('pages/search', {
        list,
        name
    });
};
exports.search = search;
