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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputData = void 0;
//do you like being a single child.
const express_1 = __importDefault(require("express"));
const getData_controller_1 = require("../controllers/getData.controller");
const checkCon_1 = require("../database/checkCon");
const router = express_1.default.Router();
let inputData;
exports.inputData = inputData;
console.log('routes running?');
router.get('/getroutine', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let con = yield (0, checkCon_1.checkCon)();
        res.send(yield (0, getData_controller_1.readRoutine)(con));
    });
});
router.get('/getUser', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let con = yield (0, checkCon_1.checkCon)();
        res.send(yield (0, getData_controller_1.readUser)(con));
    });
});
router.post('/adduser', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('run?');
        let con = yield (0, checkCon_1.checkCon)();
        console.log(req.body);
        // const user: user = req.body;
        // await addUser(con, user);
        // if(!user){
        //     res.status(418).send({message: 'No content'})
        // }
        res.send({
            type: 'run'
        });
    });
});
router.post('/addroutine', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let con = yield (0, checkCon_1.checkCon)();
        const routine = req.body;
        yield (0, getData_controller_1.addRoutine)(con, routine);
        if (!routine) {
            res.status(418).send({ message: 'No content' });
        }
        res.send({
            activity: `the routine is ${routine}`,
        });
    });
});
exports.default = router;
