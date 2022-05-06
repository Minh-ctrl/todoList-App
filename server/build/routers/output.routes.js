"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/activity/:id', (req, res) => {
    const { id } = req.params;
    const { activity } = req.body;
    if (!activity) {
        res.status(418).send({ message: 'No content' });
    }
    res.send({
        activity: ` you will be doing ${activity}`,
        id: id,
    });
});
