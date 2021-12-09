import {Animal, IChange} from "./animal";

export class Cat extends Animal {
    constructor(catName: string) {
        super(catName);
    }

    getCryType(): string {
        return "喵";
    }

    shout() {
        console.log(`猫的叫声：${this.getCryType()}`);
        super.shout();
    }
}


export class MachineCat extends Cat implements IChange {
    changeSomething(value: string): string {
        return value;
    }
}
