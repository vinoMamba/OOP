import {Cat, MachineCat} from "./animal/cat";
import {Dog} from "./animal/dog";
import {OperationFactory} from "./calculator/calculator";
import {CashFactory} from "./shop/cash";

const cat = new Cat("橙子");
cat.shoutCount = 5;
cat.shout();

const dog = new Dog("旺财");
dog.shoutCount = 4;
dog.shout();
const ding = new MachineCat("叮当");
ding.shout();
console.log(ding.changeSomething("我有口袋，我啥都能变"));
console.log(ding);
console.log("------------calculator---------------");

const operation = new OperationFactory();

const add = operation.createOperate("+");
add.n1 = 10;
add.n2 = 20;
console.log(add.getResult());

console.log("-----------Cash--------------");

const cash = new CashFactory();

const cashNormal = cash.createCashAccept("normal");
console.log(cashNormal.acceptCash(100));
const cashRebate = cash.createCashAccept("");
console.log(cashRebate.acceptCash(100));