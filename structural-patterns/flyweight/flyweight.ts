class Clock {

    constructor(
        private diameter: number,
        private batteries: number,
        private battery: string
    ) {}
}

class ClockFactory {
    private clocks: Clock[] = [];

    public clockCheck(model: string, diameter: number, batteries: number, battery: string){
        if (this.clocks[model]){
            return this.clocks[model];
        } else {
            this.clocks[model] = new Clock(diameter, batteries, battery);
            return this.clocks[model];
        }
    }

    public showClocks(): Clock[]{
        return this.clocks;
    }
}


const clockFactory = new ClockFactory();
const clock1 = clockFactory.clockCheck('0915WKLS', 30, 1, 'AA');
const clock2 = clockFactory.clockCheck('0915WKLS+', 30, 2, 'AAA');
const clock3 = clockFactory.clockCheck('0915WKLS+', 30, 2, 'AAA');

console.log(clock1);
console.log(clock2);
console.log(clock3);

console.log(clockFactory.showClocks());