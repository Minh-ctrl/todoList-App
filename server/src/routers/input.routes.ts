import express, {Express, Request, Response, Router } from 'express';
import {readUser, readRoutine, readToday , addRoutine, addUser, addToday, deleteToday, addDefinedRoutine, increaseCounterDefinedRoutine} from '../controllers/getData.controller';
import { userRouteValidation, routineRouteValidation, todayRouteValidation} from '../controllers/Validation.controller';
import { checkCon } from '../database/checkCon';
import { routine, today, user, preDefinedRoutine } from '../database/model';

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
router.get('/gettoday', async function (req: Request, res: Response){
    let con = await checkCon();
    res.send(
        await readToday(con)
    )
})
//having some trouble with type checking the incoming POST request, will need to read more about it later.
//define types statically
//add database
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
router.post('/addtoday', async function (req: Request, res: Response){
    let con = await checkCon();
    const today = req.body as today;
    // console.log(today);
    // console.log(todayRouteValidation(today));
    if(todayRouteValidation(today)){
        await addToday(con , today);
        res.send({
            message: 'sent data',
            today
        })
    }
    else{
        res.status(418).send({message:' bad request'});
    }
})
router.post('/addDefinedRoutine', async function(req: Request, res: Response){
    let con = await checkCon();
    const definedRoutine = req.body as preDefinedRoutine;
    await addDefinedRoutine(con, definedRoutine);
    res.send({
        message: 'data have been input',
        definedRoutine
    })
})
//update & delete
router.post('/deletetoday', async function (req: Request, res: Response){
    let con = await checkCon();
    const data = req.body;
    try{
        await deleteToday(con, data.activity);
        res.send({
            message:'this runs'
        });
    }
    catch (e){
        console.log(e);
    }

})
router.post('/increaseDefinedRoutine', async function (req: Request, res: Response){
    let con = await checkCon();
    const definedRoutine = req.body as preDefinedRoutine;

    if (definedRoutine.counter === definedRoutine.limit){
        await increaseCounterDefinedRoutine(con, definedRoutine);
        res.send({
            message: 'limit reached, finished',
            definedRoutine
        })
    }
    else{
        await increaseCounterDefinedRoutine(con, definedRoutine);
    }
})
export {inputData};
export default router;