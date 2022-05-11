import {Document, Filter, MongoClient} from 'mongodb';
import {inputData} from '../routers/input.routes';
import {checkCon} from '../database/checkCon';
const readAll = async (con : MongoClient) => {
    const res = (await con).db('todoList').collection('work').find();
    return await res.toArray();
};
const writeName = async (client: MongoClient, inputData:any) => {
    const res=  await client.db('todoList').collection('work').insertOne({
        // inputData
    })
    return res;
};
// const updateName= async (client: MongoClient, name: Filter<Document>, newName: string) => {
//     await client.db("todoList").collection('User').updateMany(name, {$set: {name: newName}} );
//     console.log(`changed name from ${name.name} to ${newName}`);
// }
const updateWork = async (client: MongoClient, work: Filter<Document>, newWork: string) => { 
    const res = await client.db("work").collection("work").updateMany(work,{$set: {newWork}});
    return res; 
}
// main();
export {readAll, writeName, updateWork};