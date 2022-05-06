"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getData_controller_1 = require("../controllers/getData.controller");
const body_parser_1 = __importDefault(require("body-parser"));
var urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
const router = express_1.default.Router();
router.get('/getData', function (req, res) {
    res.send(getData_controller_1.data);
});
router.post('/addschedule', function (req, res) {
    const { activity } = req.body;
    if (!activity) {
        res.status(418).send({ message: 'No content' });
    }
    res.send({
        activity: `you will be doing ${activity}`,
    });
});
exports.default = router;
