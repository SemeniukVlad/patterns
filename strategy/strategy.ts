 class HeatTreatment {

    constructor(
        private method: TreatmentMethod
        ) {}

    public changeMethod(method: TreatmentMethod): void {
        this.method = method;
    }

    public doProcessing(): void {
        const result = this.method.process('special steel aloy');
        console.log(result);
    }
}

interface TreatmentMethod {
    process(aloy: string): string;
}

class Annealing implements TreatmentMethod {
    public process(aloy: string): string {
        let techInfo = `we need to use annealing for this specific piece of ${aloy}`
        return techInfo;
    }
}

class Normalizing implements TreatmentMethod {
    public process(aloy: string): string {
        let techInfo = `we need to use normalizing for this specific piece of ${aloy}`
        return techInfo;
    }
}
class Quenching implements TreatmentMethod {
    public process(aloy: string): string {
        let techInfo = `we need to use quenching for this specific piece of ${aloy}`
        return techInfo;
    }
}

const context = new HeatTreatment(new Annealing());
context.doProcessing();
context.changeMethod(new Quenching());
context.doProcessing();
context.changeMethod(new Normalizing());
context.doProcessing();