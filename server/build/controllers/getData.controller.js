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
exports.validation = exports.addUser = exports.addRoutine = exports.readRoutine = exports.readUser = void 0;
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
const addRoutine = (client, inputData) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db('todoList').collection('routine').insertOne({
        inputData
    });
    return res;
});
exports.addRoutine = addRoutine;
const addUser = (client, inputData) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db('todoList').collection('User').insertOne({
        inputData
    });
});
exports.addUser = addUser;
//validation function to check structure, have to abstract validation to work for each endpoint;
const validation = (input) => {
    //destructure the input
    //what if you want to pass --> this is not an age field.
    const userKey = ['id', 'name', 'age'];
    if (userKey.every((value) => Object.keys(input).includes(value))) {
        //TBD
        for (const [key, value] of Object.entries(input)) {
            console.log(typeof (value));
        }
        return true;
    }
    return false;
};
exports.validation = validation;
