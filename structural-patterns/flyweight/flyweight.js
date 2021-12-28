var Clock = /** @class */ (function () {
    function Clock(diameter, batteries, battery) {
        this.diameter = diameter;
        this.batteries = batteries;
        this.battery = battery;
    }
    return Clock;
}());
var ClockFactory = /** @class */ (function () {
    function ClockFactory() {
        this.clocks = [];
    }
    ClockFactory.prototype.clockCheck = function (model, diameter, batteries, battery) {
        if (this.clocks[model]) {
            return this.clocks[model];
        }
        else {
            this.clocks[model] = new Clock(diameter, batteries, battery);
            return this.clocks[model];
        }
    };
    ClockFactory.prototype.showClocks = function () {
        return this.clocks;
    };
    return ClockFactory;
}());
var clockFactory = new ClockFactory();
var clock1 = clockFactory.clockCheck('0915WKLS', 30, 1, 'AA');
var clock2 = clockFactory.clockCheck('0915WKLS+', 30, 2, 'AAA');
var clock3 = clockFactory.clockCheck('0915WKLS+', 30, 2, 'AAA');
console.log(clock1);
console.log(clock2);
console.log(clock3);
console.log(clockFactory.showClocks());
