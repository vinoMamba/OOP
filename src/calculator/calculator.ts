export type Operate = "+" | "-" | "*" | "/"

class Operation {
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

    getResult() {
    }
}

class OperationAdd extends Operation {
    getResult(): number {
        return this.n1 + this.n2;
    }
}

class OperationSub extends Operation {
    getResult(): number {
        return this.n1 - this.n2;
    }
}

class OperationMult extends Operation {
    getResult(): number {
        return this.n1 * this.n2;
    }
}

class OperationDiv extends Operation {
    getResult(): number {
        if (this.n2 === 0) {
            throw new Error("The denominator can not be 0");
        } else {
            return this.n1 / this.n2;
        }
    }
}


export class OperationFactory {
    createOperate(operateType: Operate) {
        let operate: Operation | null;
        switch (operateType) {
            case "+":
                operate = new OperationAdd();
                break;
            case "-":
                operate = new OperationSub();
                break;
            case "*":
                operate = new OperationMult();
                break;
            case "/":
                operate = new OperationDiv();
                break;
        }
        return operate;
    }
}









