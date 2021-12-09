export abstract class CashSuper {
    abstract acceptCash(money: number): number
}

class CashNormal extends CashSuper {
    acceptCash(money: number): number {
        return money;
    }
}

class CashRebate extends CashSuper {
    moneyRebate: number = 1;

    constructor(moneyRebate: number = 1) {
        super();
        this.moneyRebate = moneyRebate;
    }

    acceptCash(money: number): number {

        return money * this.moneyRebate;
    }
}

export class CashFactory {

    createCashAccept(type: string) {

        let cash: CashSuper;
        if (type === "normal") {
            cash = new CashNormal();
        } else {
            cash = new CashRebate(0.8);
        }
        return cash;
    }
}