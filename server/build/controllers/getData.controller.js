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
exports.updateWork = exports.writeName = exports.readAll = void 0;
const readAll = (con) => __awaiter(void 0, void 0, void 0, function* () {
    const res = (yield con).db('todoList').collection('work').find();
    return yield res.toArray();
});
exports.readAll = readAll;
const writeName = (client, inputData) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db('todoList').collection('work').insertOne({
    // inputData
    });
    return res;
});
exports.writeName = writeName;
// const updateName= async (client: MongoClient, name: Filter<Document>, newName: string) => {
//     await client.db("todoList").collection('User').updateMany(name, {$set: {name: newName}} );
//     console.log(`changed name from ${name.name} to ${newName}`);
// }
const updateWork = (client, work, newWork) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db("work").collection("work").updateMany(work, { $set: { newWork } });
    return res;
});
exports.updateWork = updateWork;
