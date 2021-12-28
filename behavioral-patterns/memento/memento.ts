class DataScreen {

    constructor(
        private data: number[]
    ) {}

    public updateData(data: number[]): void {
        this.data = data;
        console.log(`data values has been updated to ${this.data}`);
    }

    public save(): DataSlot {
        return new DataValue(this.data);
    }
}

interface DataSlot {
    getData(): number[];
}


class DataValue implements DataSlot{

    constructor(
        private data: number[]
    ) {}

    public getData(): number[] {
        return this.data;
    }
}


class Memory {

    constructor(
        private dataScreen: DataScreen,
        private history: DataSlot[] = []
    ) {}

    public addToMemory(): void {
        console.log('data values has been added to memory');
        this.history.push(this.dataScreen.save());
    }

    public restoreFromMemorySlot(index: number): void {
        console.log(`data from slot ${index} was restored`);
        this.dataScreen.updateData(this.history[index].getData());
    }

    public showHistory(): void {
        console.log('History:');
        for (let dataSlot of this.history) {
            console.log(dataSlot.getData());
        }
    }
}

let values = [66, 89, 0];
const dataScreen = new DataScreen(values);
const memory = new Memory(dataScreen);

memory.addToMemory();
memory.showHistory();

values = [89, 90, 2];
dataScreen.updateData(values);

memory.addToMemory();
memory.showHistory();

memory.restoreFromMemorySlot(0);
memory.addToMemory();
memory.showHistory();
