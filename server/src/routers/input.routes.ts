//do you like being a single child.
import express, {Express, Request, Response, Router } from 'express';
import {writeName, readAll, updateWork} from '../controllers/getData.controller';
import { checkCon } from '../database/checkCon';

const router = express.Router();
let inputData:any;
console.log('routes running?');
router.get('/getData', async function (req: Request, res: Response) {
    let con = await checkCon();
    res.send(
       await readAll(con)
    );
});
router.post('/addschedule',async function (req: Request, res: Response){
    let con = await checkCon();
    const activity= req.body;
    // console.log(activity);
    await writeName(con, activity);
    if(!activity){
        res.status(418).send({message: 'No content'})
    }
    res.send({
        activity: `you will be doing ${activity}`,
    });
});
// router.post('/changeSchedule', async (req: Request, res: Response) =>{ 
//     let con = await checkCon();
//     const {newWork}= req.body;
//     await updateWork(con, req, newWork)
// })
export {inputData};
export default router;