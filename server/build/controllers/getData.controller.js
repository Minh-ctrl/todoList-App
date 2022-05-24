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
exports.increaseCounterDefinedRoutine = exports.deleteToday = exports.readToday = exports.addDefinedRoutine = exports.addToday = exports.addUser = exports.addRoutine = exports.readRoutine = exports.readUser = void 0;
//Read
const readUser = (con) => __awaiter(void 0, void 0, void 0, function* () {
    const res = (yield con).db('todoList').collection('User').find();
    return yield res.toArray();
});
exports.readUser = readUser;
const readRoutine = (con) => __awaiter(void 0, void 0, void 0, function* () {
    const res = (yield con).db('todoList').collection('routine').find();
    return yield res.toArray();
});
exports.readRoutine = readRoutine;
const readToday = (con) => __awaiter(void 0, void 0, void 0, function* () {
    const res = (yield con).db('todoList').collection('Today').find();
    return yield res.toArray();
});
exports.readToday = readToday;
//Create
const addRoutine = (client, inputData) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db('todoList').collection('routine').insertOne(inputData);
    return res;
});
exports.addRoutine = addRoutine;
const addUser = (client, inputData) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db('todoList').collection('User').insertOne(inputData);
});
exports.addUser = addUser;
const addToday = (client, inputData) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db('todoList').collection('Today').insertOne(inputData);
});
exports.addToday = addToday;
const addDefinedRoutine = (client, inputData) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db('todoList').collection('preDefinedRoutine').insertOne(inputData);
});
exports.addDefinedRoutine = addDefinedRoutine;
const increaseCounterDefinedRoutine = (client, inputData) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db('todoList').collection('preDefinedRoutine').updateOne({ type: inputData.type, user_id: inputData.user_id }, { $set: { counter: inputData.counter } });
});
exports.increaseCounterDefinedRoutine = increaseCounterDefinedRoutine;
//Delete
const deleteToday = (client, activityName) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db("todoList").collection('Today').updateOne({ activity: activityName }, { $set: { done: true } });
    const res1 = yield client.db('todoList').collection('Today').deleteMany({
        done: true,
    });
});
exports.deleteToday = deleteToday;
