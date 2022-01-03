interface AccessSystem {
    enter(clearanceLevel?: number): void;
}

class Building implements AccessSystem {
    public enter(): void {
        console.log('Welcome');
    }
}

class BuildingProxy implements AccessSystem {

    constructor(
        private building: Building
    ) {}

    public enter(clearanceLevel: number): void {
        if (clearanceLevel > 1){
            this.building.enter();
        } else {
            console.log('clearance level failure');
        }

    }
}

interface OfficeWorker{
    getClearance(): number;
}

class RegularWorker implements OfficeWorker{

    constructor(
        public clearanceLevel: number = 1
    ){}

    getClearance(): number {
        return this.clearanceLevel;
    }
}

class HighProfileWorker implements OfficeWorker{

    constructor(
        public clearanceLevel: number = 2
    ){}

    getClearance(): number {
        return this.clearanceLevel;
    }
}

const bob = new RegularWorker();
const max = new HighProfileWorker();
const buildingSecurity = new BuildingProxy(new Building());
buildingSecurity.enter(bob.getClearance());
buildingSecurity.enter(max.getClearance());
