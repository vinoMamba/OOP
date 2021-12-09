export type Operate = "+" | "-" | "*" | "/"

export class Operation {
    private _n1: number = 0;
    private _n2: number = 0;

    get n1(): number {
        return this._n1;
    }

    get n2(): number {
        return this._n2;
    }

    set n1(value: number) {
        this._n1 = value;
    }

    set n2(value: number) {
        this._n2 = value;
    }

    getResult(): number {
        return 0;
    }

    createOperate(operate: Operate) {
        let xxx = null;
        if (operate === '+') {
            xxx = new OperationAdd();
        }
        return xxx;
    }
}


class OperationAdd extends Operation {
    getResult(): number {
        return this.n1 + this.n2;
    }
}
