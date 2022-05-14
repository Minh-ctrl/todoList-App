import {Document, Filter, MongoClient} from 'mongodb';
import {inputData} from '../routers/input.routes';
import {checkCon} from '../database/checkCon';
import { routine , user} from '../database/model';
import { type } from 'os';
const readUser = async (con : MongoClient) => {
    const res = (await con).db('todoList').collection('User').find();
    return await res.toArray();
};
const readRoutine = async (con : MongoClient) => {
    const res = (await con).db('todoList').collection('routine').find();
    return await res.toArray();
}
const addRoutine = async (client: MongoClient, inputData: routine) => {
    const res=  await client.db('todoList').collection('routine').insertOne({
        inputData
    })
    return res;
};
const addUser = async (client: MongoClient, inputData: user) => { 
    const res = await client.db('todoList').collection('User').insertOne({
        inputData
    })
};
//validation function to check structure, have to abstract validation to work for each endpoint;
//validates the incoming object from POST request body.
const keyValidation = (input: Record<string, any>) => {
    // this function doesn't test content of the body request
    //destructure the input.
    //what if you want to pass --> this is not an age field.
    const userDataStructure = {'id': 'number', 'name': 'string', 'age': 'number'};
    const userKeysDataStructure =  Object.keys(userDataStructure);
    const userValDataStructure = Object.values(userDataStructure).sort();
    const inputKeys = Object.keys(input);    
    let userInputType: Array<string> = [];
    // console.log(Object.keys(input).sort());

    const isMatchingTypeKeys = userKeysDataStructure.every((value) => inputKeys.includes(value));
    if (isMatchingTypeKeys) {
        //TBD
        for (const [key, value] of Object.entries(input)){
            // console.log(typeof(value));
            userInputType.push(typeof(value));
        }
        if(userInputType.every((val, i) => val ===  userValDataStructure[i])){
            console.log('this works');
        }
    }
    return false;
};
// const updateName= async (client: MongoClient, name: Filter<Document>, newName: string) => {
//     await client.db("todoList").collection('User').updateMany(name, {$set: {name: newName}} );
//     console.log(`changed name from ${name.name} to ${newName}`);
// }
// const updateWork = async (client: MongoClient, work: Filter<Document>, newWork: string) => { 
//     const res = await client.db("work").collection("work").updateMany(work,{$set: {newWork}});
//     return res; 
// }
export {readUser, readRoutine, addRoutine, addUser, keyValidation};