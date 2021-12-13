import { Cat, MachineCat } from "./animal/cat";
import { Dog } from "./animal/dog";
import { OperationFactory } from "./calculator/calculator";
import { CashContext } from "./shop/cashContext";
import { SkillFactory, SpiderMan } from "./decoration/hero";
import { SchoolGirl, ToolMan } from "./proxy/pursuit";
import { FakeStarFactory } from "./factory";
import { SingleDog } from "./single";

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

const cash = new CashContext("normal");
const money = cash.getResult(100);
console.log("normal", money);

const cashRebate = new CashContext("eightfold");
const moneyRebate = cashRebate.getResult(100);
console.log("rebate", moneyRebate);

console.log("-------decoration------");

const spiderMan = new SpiderMan("vino");
const skill = new SkillFactory();
skill.createSkill("tusi", spiderMan);

console.log(spiderMan);

console.log("------Proxy------");

const mm = new SchoolGirl("宁次");
const toolMan = new ToolMan(mm);
toolMan.giveDolls();
toolMan.giveChocolate();
console.log(toolMan);

console.log("-----------Facroty-----------------");

const fakeMobile = new FakeStarFactory();
const os = fakeMobile.createOS();
const ware = fakeMobile.createHardWare();
console.log(fakeMobile, os, ware);
console.log(os);
console.log(ware);
os.controllHardWare();
ware.operate();

console.log("---------singleton-------------");
const d1 = new SingleDog().getInstance();
const d2 = new SingleDog().getInstance();
console.log(d1);
console.log(d2);
console.log(d1 === d2);
