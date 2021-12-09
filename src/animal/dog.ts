import {Animal} from "./animal";

export class Dog extends Animal {
    constructor(dogName: string) {
        super(dogName);
    }

    getCryType(): string {
        return "汪";
    }

    shout() {
        console.log(`狗的叫声：${this.getCryType()}`);
        super.shout();
    }
}
