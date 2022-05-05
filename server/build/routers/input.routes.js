"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getData_controller_1 = require("../controllers/getData.controller");
const router = express_1.default.Router();
router.get('/', function (req, res) {
    res.send(getData_controller_1.data);
});
exports.default = router;
