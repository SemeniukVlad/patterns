var TefalBlender = /** @class */ (function () {
    function TefalBlender() {
    }
    TefalBlender.prototype.blenderProduction = function (material, power, cupVolume) {
        this.material = material;
        this.power = power;
        this.cupVolume = cupVolume;
        console.log('Producing a blender using Tefal technologies and according to specifications');
        return this;
    };
    return TefalBlender;
}());
var PhillipsBlender = /** @class */ (function () {
    function PhillipsBlender() {
    }
    PhillipsBlender.prototype.blenderProduction = function (material, power, cupVolume) {
        this.material = material;
        this.power = power;
        this.cupVolume = cupVolume;
        console.log('Producing a blender according to specifications using super secret and new Phillips technologies');
        return this;
    };
    return PhillipsBlender;
}());
var TefalToaster = /** @class */ (function () {
    function TefalToaster() {
    }
    TefalToaster.prototype.toasterProduction = function (slots, modes, power) {
        this.slots = slots;
        this.modes = modes;
        this.power = power;
        console.log('Producing a regular toaster but it\'s made on a Tefal factory using their tech');
        return this;
    };
    return TefalToaster;
}());
var PhillipsToaster = /** @class */ (function () {
    function PhillipsToaster() {
    }
    PhillipsToaster.prototype.toasterProduction = function (slots, modes, power) {
        this.slots = slots;
        this.modes = modes;
        this.power = power;
        console.log('Producing a revolution in toasters right here on a Phillips factory');
        return this;
    };
    return PhillipsToaster;
}());
var TefalFactory = /** @class */ (function () {
    function TefalFactory() {
    }
    TefalFactory.prototype.newBlender = function () {
        var factory = new TefalBlender();
        return factory.blenderProduction('metal', 1000, 800);
    };
    TefalFactory.prototype.newToaster = function () {
        var factory = new TefalToaster();
        return factory.toasterProduction(2, 7, 850);
    };
    return TefalFactory;
}());
var PhillipsFactory = /** @class */ (function () {
    function PhillipsFactory() {
    }
    PhillipsFactory.prototype.newBlender = function () {
        var factory = new PhillipsBlender();
        return factory.blenderProduction('metal', 650, 500);
    };
    PhillipsFactory.prototype.newToaster = function () {
        var factory = new PhillipsToaster();
        return factory.toasterProduction(2, 8, 830);
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
