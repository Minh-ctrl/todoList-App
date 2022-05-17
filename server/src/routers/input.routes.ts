import express, {Express, Request, Response, Router } from 'express';
import {readUser, readRoutine, addRoutine, addUser} from '../controllers/getData.controller';
import { userRouteValidation, routineRouteValidation} from '../controllers/Validation.controller';
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
router.get('/getuser', async function (req: Request, res: Response){
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
    if(userRouteValidation(user)){
        await addUser(con, user);
        res.send({
            message: 'run'
        })
    }
    else{
        res.status(418).send({message: 'bad request'})
    }
});
router.post('/addroutine',async function (req: Request, res: Response){
    let con = await checkCon();
    const routine= req.body as routine;
    if(routineRouteValidation(routine)){
        await addRoutine(con,routine);
        res.send({
            message: 'routine has been added'
        })
    }
    else{
        res.status(418).send({message: 'bad request'})
    }
});
// router.post('/changeSchedule', async (req: Request, res: Response) =>{ 
//     let con = await checkCon();
//     const {newWork}= req.body;
//     await updateWork(con, req, newWork)
// })
export {inputData};
export default router;