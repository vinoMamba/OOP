export class SchoolGirl {
    constructor(public girlName: string) {
    }
}

interface GiveGift {
    giveDolls(): void

    giveFlowers(): void

    giveChocolate(): void
}

class Pursuit implements GiveGift {
    constructor(protected mm: SchoolGirl) {
    }

    giveDolls() {
        console.log(`${this.mm.girlName}+ 送玩偶`);
    }

    giveFlowers() {
        console.log(`${this.mm.girlName}+ 送花`);
    }

    giveChocolate() {
        console.log(`${this.mm.girlName}+ 送巧克力`);
    }

}

export class ToolMan implements GiveGift {
    protected gg: Pursuit;

    constructor(protected mm: SchoolGirl) {
        this.gg = new Pursuit(mm);
    }

    giveDolls() {
        this.gg.giveDolls();
    }

    giveFlowers() {
        this.gg.giveDolls();
    }

    giveChocolate() {
        this.gg.giveChocolate();
    }
}
