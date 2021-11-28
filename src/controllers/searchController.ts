import {Request, Response} from 'express';
import {Pet} from '../models/pet';

export const search = (req: Request, res: Response)=>{
    let name = req.query.q as string;
    let list = Pet.getFromName(name);
    if(!name){
        res.redirect('/')
        return;
    }
    res.render('pages/search',{
        list,
        name
    });
};