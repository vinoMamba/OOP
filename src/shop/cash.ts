import {Cash} from "./types";

export class CashNormal implements Cash {
    acceptCash(money: number): number {
        return money;
    }
}

export class CashRebate implements Cash {
    moneyRebate: number = 1;

    constructor(moneyRebate: number = 0.8) {
        this.moneyRebate = moneyRebate;
    }

    acceptCash(money: number): number {
        return money * this.moneyRebate;
    }
}
