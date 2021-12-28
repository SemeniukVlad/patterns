interface WorkSpace {
    hire(worker: ProductionWorker): void;
    fire(worker: ProductionWorker): void;
    notify(): void;
}

class Production implements WorkSpace {
    public rules: string = 'old rules'
    private workers: ProductionWorker[] = [];

    public hire(worker: ProductionWorker): void {
        this.workers.push(worker);
        console.log(`Worker ${worker.name()} is hired`);
    }

    public fire(worker: ProductionWorker): void {
        let index = this.workers.indexOf(worker);
        this.workers.splice(index, 1);
        console.log(`Worker ${worker.name()} is fired`);
    }

    public notify(): void {
        for (let worker of this.workers) {
            worker.notification(this);
        }
    }

    public updatedSafetyRules(rules: string): void {
        console.log('Updating safety rules');
        this.rules = rules;
        this.notify();
    }
}

interface ProductionWorker {
    name(): string;
    notification(workSpace: WorkSpace): void;
}

class Bob implements ProductionWorker {
    public name(): string {
        return 'Bob'
    }
    public notification(workSpace: WorkSpace): void {
        console.log('Worker Bob has recieved notification');
    }
}
class Max implements ProductionWorker {
    public name(): string {
        return 'Max'
    }
    public notification(workSpace: WorkSpace): void {
        console.log('Worker Max has recieved notification');
    }
}



const production = new Production();
const bob = new Bob();
const max = new Max();


production.hire(bob);
production.hire(max);
production.updatedSafetyRules('new rules');
production.fire(bob);
production.updatedSafetyRules('super new rules');