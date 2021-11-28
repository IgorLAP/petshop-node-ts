import {Request, Response} from 'express';
import { Pet } from '../models/pet';

export const home = (req: Request, res: Response)=>{
    let list = Pet.getAll();
    res.render('pages/template', {
        banner: {
            title: 'Todos os animais',
            image: 'allanimals.jpg'
        },
        all: true,
        list
    })
};

export const dogs = (req: Request, res: Response)=>{
    let list = Pet.getFromType('dog');
    res.render('pages/template', {
        banner: {
            title: 'Cachorros',
            image: 'banner_dog.jpg'
        },
        dogs: true,
        list
    })
};

export const cats = (req: Request, res: Response)=>{
    let list = Pet.getFromType('cat');
    res.render('pages/template', {
        banner: {
            title: 'Gatos',
            image: 'banner_cat.jpg'
        },
        cats: true,
        list
    })
};

export const fishes = (req: Request, res: Response)=>{
    let list = Pet.getFromType('fish');
    res.render('pages/template', {
        banner: {
            title: 'Peixes',
            image: 'banner_fish.jpg'
        },
        fish: true,
        list
    })
};