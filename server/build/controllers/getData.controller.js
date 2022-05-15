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
exports.routineRouteValidation = exports.userRouteValidation = exports.addUser = exports.addRoutine = exports.readRoutine = exports.readUser = void 0;
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
//validates the incoming object from POST request body.
let InputKeys = [];
const userDataStructure = {
    'id': 'number',
    'name': 'string',
    'age': 'number'
};
const routineDataStructure = {
    'user_id': 'number',
    "routine_name": "string",
    "frequency": "string",
    "importance": "string",
    "done": "boolean",
};
const typeValidation = (input) => {
    // this function doesn't test content of the body request
    //destructure the input.
    //what if you want to pass --> this is not an age field.
    let InputType = [];
    //validation for user route;
    InputKeys = Object.keys(input);
    for (const [key, value] of Object.entries(input)) {
        InputType.push(typeof (value));
    }
    return InputType;
};
const userRouteValidation = (input) => {
    const userKeysDataStructure = Object.keys(userDataStructure);
    const userTypeDataStructure = Object.values(userDataStructure).sort();
    const InputType = typeValidation(input).sort();
    const isMatchingTypeKeys = userKeysDataStructure.every((val) => InputKeys.includes(val));
    console.log(InputType);
    console.log(userTypeDataStructure);
    if (isMatchingTypeKeys) {
        if (InputType.every((val, i) => val === userTypeDataStructure[i])) {
            return true;
        }
    }
    else {
        return false;
    }
};
exports.userRouteValidation = userRouteValidation;
const routineRouteValidation = (input) => {
    const routineKeysDataStructure = Object.keys(routineDataStructure);
    const routineTypeDataStructure = Object.values(routineDataStructure).sort();
    const InputType = typeValidation(input).sort();
    const isMatchingTypeKeys = routineKeysDataStructure.every((val) => InputKeys.includes(val));
    console.log(routineKeysDataStructure);
    console.log('br');
    console.log(routineTypeDataStructure);
    console.log('br');
    console.log(InputType);
    console.log('br');
    console.log(isMatchingTypeKeys);
    if (isMatchingTypeKeys) {
        if (InputType.every((val, i) => val === routineTypeDataStructure[i])) {
            return true;
        }
    }
    else {
        return false;
    }
};
exports.routineRouteValidation = routineRouteValidation;
