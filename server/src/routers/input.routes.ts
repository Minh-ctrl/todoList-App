import express, {Express, Request, Response, Router } from 'express';
import {data} from '../controllers/getData.controller';
import bodyParser from 'body-parser';
import {Document, Filter, MongoClient} from 'mongodb';
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();

router.get('/', function (req: Request, res: Response) {
    res.send(
        data
    );
});
router.post('/addSchedule', urlencodedParser, function (req: Request, res: Response){
    let data = {id: 211, name:'Jazz', activity:'something'};
})
export default router;