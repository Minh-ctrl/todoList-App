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
exports.checkCon = void 0;
const mongodb_1 = require("mongodb");
let con;
function checkCon() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'mongodb://127.0.0.1:27017';
        if (!con) {
            con = new mongodb_1.MongoClient(url);
            try {
                return yield con.connect();
            }
            catch (e) {
                console.log(e);
            }
        }
        return con;
    });
}
exports.checkCon = checkCon;
