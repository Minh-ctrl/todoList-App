// require is common js 
// import is es module
// import {Document, Filter, MongoClient} from 'mongodb';
import router from './routers/input.routes';
import express, {Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {Document, Filter, MongoClient} from 'mongodb';
const app = express();
app.use(cors());
// read later what bodyParser actually does;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(router);
// async function main () {
//     const url = 'mongodb://127.0.0.1:27017';
//     const client = new MongoClient(url);
//     try{
//         await client.connect();
//         await readAll(client);
//     }
//     catch(e){
//         console.error(e)
//     }
//     finally{
//         await client.close();
//     }
// };
// const readAll = async (client : MongoClient) => {
//     //telling server to find something ==> not async;
//     //tell driver what to do with that, in this case node.js;
//     //cursor analogy: ingredient to do something next;
//     const res = client.db('todoList').collection('User').find();
//     console.log(res.toArray());
// }
app.listen(5000);
// const writeName = async (client: MongoClient) => {
//     const res=  await client.db('todoList').collection('User').insertOne({
//     name: 'tako'
// })};
// const readAll = async (client : MongoClient) => {
//     //telling server to find something ==> not async;
//     //tell driver what to do with that, in this case node.js;
//     //cursor analogy: ingredient to do something next;
//     const res = client.db('todoList').collection('User').find();
//     console.log(await res.toArray());
// }
// const readName = async ( client : MongoClient , name:  Filter<Document>) => { 
//     const res = client.db('todoList').collection('User').find(name)
//     if (res){
//         console.log(await res.toArray());
//     }
//     else{
//         console.log(`404 not found`);
//     }
// }
// const updateName= async (client: MongoClient, name: Filter<Document>, newName: string) => {
//     await client.db("todoList").collection('User').updateMany(name, {$set: {name: newName}} );
//     console.log(`changed name from ${name.name} to ${newName}`);
// }
// const deleteName= async (client: MongoClient, name: Filter<Document>) => {
//     const res = await client.db("todoList").collection('User').deleteOne(name);
//     console.log(`deleted ${res.deletedCount}`);
// }
// const deleteEverything = async ( client: MongoClient) => {
//     const res = await client.db("todoList").collection('User').deleteMany({});
// }
// main();