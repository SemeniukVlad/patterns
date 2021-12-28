interface Calculator {
    execute(operation: string, value1: number, value2: number): number;
}

class FirstCalculator implements Calculator {

    public execute(operation: string, value1: number, value2: number): number {
        if(operation === 'add'){
            return value1 + value2;
        }
    }
}


class Upgrade implements Calculator {

    protected base: Calculator;

    constructor(base: Calculator) {
        this.base = base;
    }

    public execute(operation: string, value1: number, value2: number): number{
        return this.base.execute(operation, value1, value2);
    }
}

class SubtractUpgrade extends Upgrade {

    public execute(operation: string, value1: number, value2: number): number{
        if(operation === 'sub'){
            return value1 - value2;
        }
        return super.execute(operation, value1, value2);
    }
}

class MultiplyUpgrade extends Upgrade {

    public execute(operation: string, value1: number, value2: number): number{
        if(operation === 'multi'){
            return value1 * value2;
        }
        return super.execute(operation, value1, value2);
    }
}

class DivideUpgrade extends Upgrade {

    public execute(operation: string, value1: number, value2: number): number{
        if(operation === 'plus'){
            return value1/value2;
        }
        return super.execute(operation, value1, value2);
    }
}

const calc = new FirstCalculator();
console.log(calc.execute('add', 2, 4));
const calcPlus = new SubtractUpgrade(calc);
console.log(calcPlus.execute('sub', 2, 4));
const calcUltimate = new MultiplyUpgrade(calcPlus);
console.log(calcUltimate.execute('multi', 2, 4));
console.log(calcUltimate.execute('sub', 2, 4));
console.log(calcUltimate.execute('add', 2, 4));
const calcMega = new DivideUpgrade(calcUltimate);
console.log(calcMega.execute('multi', 2, 4));
console.log(calcMega.execute('sub', 2, 4));
console.log(calcMega.execute('add', 2, 4));
console.log(calcMega.execute('plus', 2, 4));