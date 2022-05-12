//do you like being a single child.
import express, {Express, Request, Response, Router } from 'express';
import {readUser, readRoutine, addRoutine, addUser, Keyvalidation} from '../controllers/getData.controller';
import { checkCon } from '../database/checkCon';
import { routine, user } from '../database/model';

const router = express.Router();
let inputData:any;
console.log('routes running?');
router.get('/getroutine', async function (req: Request, res: Response) {
    let con = await checkCon();
    res.send(
       await readRoutine(con)
    );
});
router.get('/getUser', async function (req: Request, res: Response){
    let con = await checkCon();
    res.send(
        await readUser(con)
    );
})
//having some trouble with type checking the incoming POST request, will need to read more about it later.
//define types statically
router.post('/adduser', async function (req: Request, res: Response){
    let con = await checkCon();
    const user = req.body as user;
    if(Keyvalidation(user)){
        await addUser(con, user);
        res.send({
            type: 'run'
        })
    }
    else{
        res.status(418).send({message: 'bad request'})
    }
})
router.post('/addroutine',async function (req: Request, res: Response){
    let con = await checkCon();
    const routine: routine = req.body;
    await addRoutine(con, routine);
    if(!routine){
        res.status(418).send({message: 'No content'})
    }
    res.send({
        activity: `the routine is ${routine}`,
    });
});
// router.post('/changeSchedule', async (req: Request, res: Response) =>{ 
//     let con = await checkCon();
//     const {newWork}= req.body;
//     await updateWork(con, req, newWork)
// })
export {inputData};
export default router;