"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_file_1 = require("./module-file");
var module_file2_1 = require("./module.file2");
console.log(module_file_1.data);
console.log(module_file2_1.exampleOne);
var a = 1;
var b = 2;
function moreFunction() {
  console.log("hi");
}
moreFunction();
function c(a, b) {
  return a + b;
}
console.log(c(a, b));
