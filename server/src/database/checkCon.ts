import {Document, Filter, MongoClient} from 'mongodb';
let con: MongoClient;
async function checkCon () {
    const url = 'mongodb://127.0.0.1:27017';
    if (!con){
        con = new MongoClient(url);
        try{
            
            return await con.connect();
        }
        catch(e){
            console.log(e)
        }
    }
    return con;
}

export {checkCon};