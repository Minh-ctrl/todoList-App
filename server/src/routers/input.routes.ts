import express, {Express, Request, Response, Router } from 'express';
import {data} from '../controllers/getData.controller';
import bodyParser from 'body-parser';
import {Document, Filter, MongoClient} from 'mongodb';
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();

router.get('/getData', function (req: Request, res: Response) {
    res.send(
        data
    );
});
router.post('/addschedule',function (req: Request, res: Response){
    const {activity}= req.body;
    if(!activity){
        res.status(418).send({message: 'No content'})
    }
    res.send({
        activity: `you will be doing ${activity}`,
    })
})
export default router;