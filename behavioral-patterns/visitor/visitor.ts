interface Statistics {
    accept(visitor: Visitor): void;
}

class ProductionStatistics implements Statistics {
    constructor(
        public values1: number[],
        public values2: number[]
    ){}

    public accept(visitor: Visitor): void {
        visitor.evaluate(this);
    }

    public calculateValues1(): number {
        let result: number = 0
        for (let value of this.values1){
            result = result + value;
        }
        return result;
    }

    public calculateValues2(): number {
        let result: number = 0
        for (let value of this.values2){
            result = result-value;
        }
        result = result + 100;
        return result;
    }
}

class MarketingStatistics implements Statistics {
    constructor(
        public values: number[]
    ){}

    public accept(visitor: Visitor): void {
        visitor.evaluate(this);
    }

    public calculateValues(): number {
        let result: number = 0
        for (let value of this.values){
            result = result + value;
        }
        return result;
    }
}

interface Visitor {
    evaluate(statistics: any): void;
}

class EvaluationVisitor implements Visitor {
    public evaluate(statistics: any): void {
        if (statistics instanceof ProductionStatistics){
            console.log(`the results of calculations are: ${statistics.calculateValues1()} and ${statistics.calculateValues2()}`);
        }
        if (statistics instanceof MarketingStatistics){
            console.log(`the result of calculations is: ${statistics.calculateValues()}`);
        }
    }
}

let updatedProductionValues1 = [330, 220, 1];
let updatedProductionValues2 = [13, 5, 1];
let newMarketingValues = [20, 5];

const production1 = new ProductionStatistics(updatedProductionValues1, updatedProductionValues2);
const marketing = new MarketingStatistics(newMarketingValues);
const evaluator = new EvaluationVisitor();

production1.accept(evaluator);
marketing.accept(evaluator);