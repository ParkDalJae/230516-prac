import { data } from "./module-file";
import { exampleOne } from "./module.file2";

console.log(data);
console.log(exampleOne);

const a = 1;

const b = 2;

function moreFunction(): void {
  console.log("hi");
}

moreFunction();
function c(a: number, b: number): number {
  return a + b;
}
console.log(c(a, b));
