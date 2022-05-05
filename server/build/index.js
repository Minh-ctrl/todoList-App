"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// require is common js 
// import is es module
// import {Document, Filter, MongoClient} from 'mongodb';
const input_routes_1 = __importDefault(require("./routers/input.routes"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// read later what bodyParser actually does;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(input_routes_1.default);
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
