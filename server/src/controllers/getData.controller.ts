import {Document, Filter, MongoClient} from 'mongodb';
import {inputData} from '../routers/input.routes';
import {checkCon} from '../database/checkCon';
import { routine , today, user, preDefinedRoutine} from '../database/model';
import { type } from 'os';
//Read
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

//Create
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

const addDefinedRoutine= async (client:MongoClient, inputData: preDefinedRoutine) => {
    const res = await client.db('todoList').collection('preDefinedRoutine').insertOne(
        inputData
    );
}

const increaseCounterDefinedRoutine = async (client: MongoClient, inputData: preDefinedRoutine) => {
    const res = await client.db('todoList').collection('preDefinedRoutine').updateOne(
            {type: inputData.type, user_id: inputData.user_id}, {$set:{counter: inputData.counter}}
        )
    }
//Delete
const deleteToday = async (client: MongoClient,  activityName: string) => { 
    const res = await client.db("todoList").collection('Today').updateOne({activity: activityName}, {$set: {done: true}})
    const res1 = await client.db('todoList').collection('Today').deleteMany({
        done: true,
    })    
}

//Update
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
export {readUser, readRoutine, addRoutine, addUser, addToday, addDefinedRoutine, readToday, deleteToday, increaseCounterDefinedRoutine};