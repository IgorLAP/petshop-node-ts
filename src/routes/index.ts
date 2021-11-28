import {Router} from 'express';
import * as PageController from '../controllers/pageController';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);


export default router;