"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const pet_1 = require("../models/pet");
const home = (req, res) => {
    let list = pet_1.Pet.getAll();
    res.render('pages/template', {
        banner: {
            title: 'Todos os animais',
            image: 'allanimals.jpg'
        },
        all: true,
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = pet_1.Pet.getFromType('dog');
    res.render('pages/template', {
        banner: {
            title: 'Cachorros',
            image: 'banner_dog.jpg'
        },
        dogs: true,
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = pet_1.Pet.getFromType('cat');
    res.render('pages/template', {
        banner: {
            title: 'Gatos',
            image: 'banner_cat.jpg'
        },
        cats: true,
        list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = pet_1.Pet.getFromType('fish');
    res.render('pages/template', {
        banner: {
            title: 'Peixes',
            image: 'banner_fish.jpg'
        },
        fish: true,
        list
    });
};
exports.fishes = fishes;
