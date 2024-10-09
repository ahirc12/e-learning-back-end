"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementId = incrementId;
function incrementId(id) {
    let number = Number(id.slice(1));
    let newNumber = number++;
    return id.charAt(0) + newNumber.toString().padStart(6, '0');
}
