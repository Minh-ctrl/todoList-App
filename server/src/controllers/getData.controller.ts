import {Document, Filter, MongoClient} from 'mongodb';
import {inputData} from '../routers/input.routes';
import {checkCon} from '../database/checkCon';
import { routine , today, user} from '../database/model';
import { type } from 'os';
const readUser = async (con : MongoClient) => {
    const res = (await con).db('todoList').collection('User').find();
    return await res.toArray();
}
const readRoutine = async (con : MongoClient) => {
    const res = (await con).db('todoList').collection('routine').find();
    return await res.toArray();
}
const readToday = async ( con: MongoClient) => {
    const res = (await con).db('todoList').collection('Today').find();
    return await res.toArray();
}
const addRoutine = async (client: MongoClient, inputData: routine) => {
    const res=  await client.db('todoList').collection('routine').insertOne(
        inputData
    )
    return res;
};
const addUser = async (client: MongoClient, inputData: user) => { 
    const res = await client.db('todoList').collection('User').insertOne(
        inputData
    );
};
const addToday = async (client: MongoClient, inputData: today) => { 
    const res = await client.db('todoList').collection('Today').insertOne(
        inputData
    );
};

const UpdateToday = async (client: MongoClient, activityName: string) => { 
    const res = await client.db("todoList").collection('Today').updateOne({activity: activityName}, {$set: {done: true}})
    return res;
}
const deleteToday= async (client: MongoClient) => { 
    const res = await client.db('todoList').collection('Today').deleteMany({
        done: true,
    })    
}
//validation function to check structure, have to abstract validation to work for each endpoint;
//validates the incoming object from POST request body.


// const updateName= async (client: MongoClient, name: Filter<Document>, newName: string) => {
//     await client.db("todoList").collection('User').updateMany(name, {$set: {name: newName}} );
//     console.log(`changed name from ${name.name} to ${newName}`);
// }
// const updateWork = async (client: MongoClient, work: Filter<Document>, newWork: string) => { 
//     const res = await client.db("work").collection("work").updateMany(work,{$set: {newWork}});
//     return res; 
// }
export {readUser, readRoutine, addRoutine, addUser, addToday, readToday, UpdateToday, deleteToday};