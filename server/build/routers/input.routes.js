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
const express_1 = __importDefault(require("express"));
const getData_controller_1 = require("../controllers/getData.controller");
const Validation_controller_1 = require("../controllers/Validation.controller");
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
router.get('/getuser', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let con = yield (0, checkCon_1.checkCon)();
        res.send(yield (0, getData_controller_1.readUser)(con));
    });
});
router.get('/gettoday', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let con = yield (0, checkCon_1.checkCon)();
        res.send(yield (0, getData_controller_1.readToday)(con));
    });
});
//having some trouble with type checking the incoming POST request, will need to read more about it later.
//define types statically
//add database
router.post('/adduser', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let con = yield (0, checkCon_1.checkCon)();
        const user = req.body;
        if ((0, Validation_controller_1.userRouteValidation)(user)) {
            yield (0, getData_controller_1.addUser)(con, user);
            res.send({
                message: 'run'
            });
        }
        else {
            res.status(418).send({ message: 'bad request' });
        }
    });
});
router.post('/addroutine', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let con = yield (0, checkCon_1.checkCon)();
        const routine = req.body;
        if ((0, Validation_controller_1.routineRouteValidation)(routine)) {
            yield (0, getData_controller_1.addRoutine)(con, routine);
            res.send({
                message: 'routine has been added'
            });
        }
        else {
            res.status(418).send({ message: 'bad request' });
        }
    });
});
router.post('/addtoday', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let con = yield (0, checkCon_1.checkCon)();
        const today = req.body;
        // console.log(today);
        console.log((0, Validation_controller_1.todayRouteValidation)(today));
        if ((0, Validation_controller_1.todayRouteValidation)(today)) {
            yield (0, getData_controller_1.addToday)(con, today);
            res.send({
                message: 'sent data',
                today
            });
        }
        else {
            res.status(418).send({ message: ' bad request' });
        }
    });
});
//update & delete
router.post('/deletetoday', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let con = yield (0, checkCon_1.checkCon)();
        const data = req.body;
        try {
            yield (0, getData_controller_1.deleteToday)(con, data.activity);
            res.send({
                message: 'this runs'
            });
        }
        catch (e) {
            console.log(e);
        }
    });
});
exports.default = router;
