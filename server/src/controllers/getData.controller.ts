import {Document, Filter, MongoClient} from 'mongodb';
let data:any;
const url = 'mongodb://127.0.0.1:27017';
async function main () {
    const client = new MongoClient(url);
    try{
        await client.connect();
        await readAll(client);
    }
    catch(e){
        console.error(e);
    }
    finally{
        await client.close();
    }
};
const readAll = async (client : MongoClient) => {
    //telling server to find something ==> not async;
    //tell driver what to do with that, in this case node.js;
    //cursor analogy: ingredient to do something next;
    const res = client.db('todoList').collection('User').find();
    data= await res.toArray();
};
const writeName = async (client: MongoClient) => {
    const res=  await client.db('todoList').collection('User').insertOne({
    name: 'tako'
})};
main();
export {data};