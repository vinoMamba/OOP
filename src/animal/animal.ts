export abstract class Animal {
    protected _shoutCount: number = 3;

    protected constructor(public name: string = "无名") {
        this.name = name;
    }

    set shoutCount(n: number) {
        if (n < 1) {
            throw new Error("the shout count must be a positive integer");
        } else {
            this._shoutCount = Math.floor(n);
        }
    }

    abstract getCryType(): string

    shout() {
        let str = '';
        for (let i = 0; i < this._shoutCount; i++) {
            str += this.getCryType();
        }
        console.log(`我是${this.name}, ${str}~`);
    }
}

export interface IChange {
    changeSomething: (value: string) => string
}


