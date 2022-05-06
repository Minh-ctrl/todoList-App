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
exports.data = void 0;
const mongodb_1 = require("mongodb");
let data;
exports.data = data;
const url = 'mongodb://127.0.0.1:27017';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new mongodb_1.MongoClient(url);
        try {
            yield client.connect();
            yield readAll(client);
        }
        catch (e) {
            console.error(e);
        }
        finally {
            yield client.close();
        }
    });
}
;
const readAll = (client) => __awaiter(void 0, void 0, void 0, function* () {
    //telling server to find something ==> not async;
    //tell driver what to do with that, in this case node.js;
    //cursor analogy: ingredient to do something next;
    const res = client.db('todoList').collection('User').find();
    exports.data = data = yield res.toArray();
});
const writeName = (client) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.db('todoList').collection('User').insertOne({
        name: 'tako'
    });
});
main();
