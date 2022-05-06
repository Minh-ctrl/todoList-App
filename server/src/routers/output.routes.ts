import express, {Express, Request, Response, Router } from 'express';
import {data} from '../controllers/getData.controller';
import bodyParser from 'body-parser';

const router = express.Router();

router.post('/activity/:id', (req: Request, res: Response)=>{
        const {id}= req.params;
        const {activity}= req.body;
        if(!activity){
            res.status(418).send({message: 'No content'})
        }
        res.send({
            activity: ` you will be doing ${activity}`,
            id: id,
        })
})