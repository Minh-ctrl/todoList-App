"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todayRouteValidation = exports.routineRouteValidation = exports.userRouteValidation = void 0;
let InputKeys = [];
const userDataStructure = {
    'id': 'number',
    'name': 'string',
    'age': 'number'
};
const routineDataStructure = {
    'user_id': 'number',
    "activity": "string",
    "frequency": "string",
    "importance": "string",
    "done": "boolean",
};
const todayDataStructure = {
    'activity': 'string',
    'description': 'string',
    'done': 'boolean',
    'id': 'number',
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
const todayRouteValidation = (input) => {
    const todayKeysDataStructure = Object.keys(todayDataStructure);
    const todayTypeDataStructure = Object.values(todayDataStructure).sort();
    const InputType = typeValidation(input).sort();
    const isMatchingTypeKeys = todayKeysDataStructure.every((val) => InputKeys.includes(val));
    if (isMatchingTypeKeys) {
        if (InputType.every((val, i) => val === todayTypeDataStructure[i])) {
            return true;
        }
    }
    else {
        return false;
    }
};
exports.todayRouteValidation = todayRouteValidation;
