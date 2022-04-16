"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// require is common js 
// import is es module
const mongodb_1 = require("mongodb");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'mongodb://127.0.0.1:27017';
        const client = new mongodb_1.MongoClient(url);
        try {
            yield client.connect();
            // await updateName(client, {name: 'jim'} , 'tako')
            // await deleteName(client, {name: 'Gaymes bro'})
            // await readAll(client);
            yield deleteEverything(client);
        }
        catch (e) {
            console.error(e);
        }
        finally {
            yield client.close();
        }
    });
}
;
const writeName = (client) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db('todoList').collection('User').insertOne({
        name: 'tako'
    });
});
const readAll = (client) => __awaiter(void 0, void 0, void 0, function* () {
    //telling server to find something ==> not async;
    //tell driver what to do with that, in this case node.js;
    //cursor analogy: ingredient to do something next;
    const res = client.db('todoList').collection('User').find();
    console.log(yield res.toArray());
});
const readName = (client, name) => __awaiter(void 0, void 0, void 0, function* () {
    const res = client.db('todoList').collection('User').find(name);
    if (res) {
        console.log(yield res.toArray());
    }
    else {
        console.log(`404 not found`);
    }
});
const updateName = (client, name, newName) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.db("todoList").collection('User').updateMany(name, { $set: { name: newName } });
    console.log(`changed name from ${name.name} to ${newName}`);
});
const deleteName = (client, name) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db("todoList").collection('User').deleteOne(name);
    console.log(`deleted ${res.deletedCount}`);
});
const deleteEverything = (client) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db("todoList").collection('User').deleteMany({});
});
main();
