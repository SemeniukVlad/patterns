var Production = /** @class */ (function () {
    function Production() {
        this.rules = 'old rules';
        this.workers = [];
    }
    Production.prototype.hire = function (worker) {
        this.workers.push(worker);
        console.log("Worker ".concat(worker.name(), " is hired"));
    };
    Production.prototype.fire = function (worker) {
        var index = this.workers.indexOf(worker);
        this.workers.splice(index, 1);
        console.log("Worker ".concat(worker.name(), " is fired"));
    };
    Production.prototype.notify = function () {
        for (var _i = 0, _a = this.workers; _i < _a.length; _i++) {
            var worker = _a[_i];
            worker.notification(this);
        }
    };
    Production.prototype.updatedSafetyRules = function (rules) {
        console.log('Updating safety rules');
        this.rules = rules;
        this.notify();
    };
    return Production;
}());
var Bob = /** @class */ (function () {
    function Bob() {
    }
    Bob.prototype.name = function () {
        return 'Bob';
    };
    Bob.prototype.notification = function (workSpace) {
        console.log('Worker Bob has recieved notification');
    };
    return Bob;
}());
var Max = /** @class */ (function () {
    function Max() {
    }
    Max.prototype.name = function () {
        return 'Max';
    };
    Max.prototype.notification = function (workSpace) {
        console.log('Worker Max has recieved notification');
    };
    return Max;
}());
var production = new Production();
var bob = new Bob();
var max = new Max();
production.hire(bob);
production.hire(max);
production.updatedSafetyRules('new rules');
production.fire(bob);
production.updatedSafetyRules('super new rules');
