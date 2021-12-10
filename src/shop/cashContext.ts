import {CashNormal, CashRebate} from "./cash";
import {Cash, CashMap, CashType} from "./types";

const cashMap: CashMap = {
    normal: new CashNormal(),
    eightfold: new CashRebate(0.8)
};

export class CashContext {
    cs: Cash;

    constructor(cashType: CashType) {
        this.cs = cashMap[cashType];
    }

    getResult(money: number): number {
        return this.cs.acceptCash(money);
    }

}
