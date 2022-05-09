import {Document, Filter, MongoClient} from 'mongodb';
import {inputData} from '../routers/input.routes';
import {checkCon} from '../database/checkCon';
const readAll = async (con : MongoClient) => {
    const res = (await con).db('todoList').collection('User').find();
    return await res.toArray();
};
const writeName = async (client: MongoClient,inputData:any) => {
    const res=  await client.db('todoList').collection('User').insertOne({
    work: inputData
    })
    return res;
};
// main();
export {readAll, writeName};