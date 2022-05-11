import {Document, Filter, MongoClient} from 'mongodb';
import {inputData} from '../routers/input.routes';
import {checkCon} from '../database/checkCon';
import { routine , user} from '../database/model';
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
// const updateName= async (client: MongoClient, name: Filter<Document>, newName: string) => {
//     await client.db("todoList").collection('User').updateMany(name, {$set: {name: newName}} );
//     console.log(`changed name from ${name.name} to ${newName}`);
// }
// const updateWork = async (client: MongoClient, work: Filter<Document>, newWork: string) => { 
//     const res = await client.db("work").collection("work").updateMany(work,{$set: {newWork}});
//     return res; 
// }
export {readUser, readRoutine, addRoutine, addUser};