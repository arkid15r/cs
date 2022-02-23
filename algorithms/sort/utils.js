"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = void 0;
function swap(array, id1, id2) {
    const tmp = array[id1];
    array[id1] = array[id2];
    array[id2] = tmp;
}
exports.swap = swap;
