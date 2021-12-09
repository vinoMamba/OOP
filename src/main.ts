import {Cat, MachineCat} from "./animal/cat";
import {Dog} from "./animal/dog";
import {Operation} from "./calculator/calculator";

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
console.log('------------calculator---------------');


const operation = new Operation();
const result = operation.getResult();
console.log(result);
