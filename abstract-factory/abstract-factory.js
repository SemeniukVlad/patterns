var TefalBlender = /** @class */ (function () {
    function TefalBlender(material, power, cupVolume) {
        this.material = material;
        this.power = power;
        this.cupVolume = cupVolume;
    }
    return TefalBlender;
}());
var PhillipsBlender = /** @class */ (function () {
    function PhillipsBlender(material, power, cupVolume) {
        this.material = material;
        this.power = power;
        this.cupVolume = cupVolume;
    }
    return PhillipsBlender;
}());
var TefalToaster = /** @class */ (function () {
    function TefalToaster(slots, modes, power) {
        this.slots = slots;
        this.modes = modes;
        this.power = power;
    }
    return TefalToaster;
}());
var PhillipsToaster = /** @class */ (function () {
    function PhillipsToaster(slots, modes, power) {
        this.slots = slots;
        this.modes = modes;
        this.power = power;
    }
    return PhillipsToaster;
}());
var TefalFactory = /** @class */ (function () {
    function TefalFactory() {
    }
    TefalFactory.prototype.newBlender = function () {
        return new TefalBlender('metal', 1000, 800);
    };
    TefalFactory.prototype.newToaster = function () {
        return new TefalToaster(2, 7, 850);
    };
    return TefalFactory;
}());
var PhillipsFactory = /** @class */ (function () {
    function PhillipsFactory() {
    }
    PhillipsFactory.prototype.newBlender = function () {
        return new PhillipsBlender('metal', 650, 500);
    };
    PhillipsFactory.prototype.newToaster = function () {
        return new PhillipsToaster(2, 8, 830);
    };
    return PhillipsFactory;
}());
var tefal = new TefalFactory();
var phillips = new PhillipsFactory();
var tefalBlender = tefal.newBlender();
var tefalToaster = tefal.newToaster();
var phillipsBlender = phillips.newBlender();
var phillipsToaster = phillips.newToaster();
console.log(tefalBlender);
console.log(tefalToaster);
console.log(phillipsBlender);
console.log(phillipsToaster);
