var HeatTreatment = /** @class */ (function () {
    function HeatTreatment(method) {
        this.method = method;
    }
    HeatTreatment.prototype.changeMethod = function (method) {
        this.method = method;
    };
    HeatTreatment.prototype.doProcessing = function () {
        var result = this.method.process('special steel aloy');
        console.log(result);
    };
    return HeatTreatment;
}());
var Annealing = /** @class */ (function () {
    function Annealing() {
    }
    Annealing.prototype.process = function (aloy) {
        var techInfo = "we need to use annealing for this specific piece of ".concat(aloy);
        return techInfo;
    };
    return Annealing;
}());
var Normalizing = /** @class */ (function () {
    function Normalizing() {
    }
    Normalizing.prototype.process = function (aloy) {
        var techInfo = "we need to use normalizing for this specific piece of ".concat(aloy);
        return techInfo;
    };
    return Normalizing;
}());
var Quenching = /** @class */ (function () {
    function Quenching() {
    }
    Quenching.prototype.process = function (aloy) {
        var techInfo = "we need to use quenching for this specific piece of ".concat(aloy);
        return techInfo;
    };
    return Quenching;
}());
var context = new HeatTreatment(new Annealing());
context.doProcessing();
context.changeMethod(new Quenching());
context.doProcessing();
context.changeMethod(new Normalizing());
context.doProcessing();
