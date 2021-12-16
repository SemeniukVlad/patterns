var Security = /** @class */ (function () {
    function Security() {
    }
    Security.newTerminal = function () {
        if (!Security.system) {
            Security.system = new Security();
        }
        return Security.system;
    };
    Security.prototype.getState = function () {
        return Security.state;
    };
    Security.prototype.turnOn = function () {
        return Security.state = 'on';
    };
    Security.prototype.turnOff = function () {
        return Security.state = 'off';
    };
    Security.state = 'off';
    return Security;
}());
var terminal1 = Security.newTerminal();
var terminal2 = Security.newTerminal();
var terminal3 = Security.newTerminal();
console.log(terminal3.getState() + " - изначальное состояние");
terminal1.turnOn();
console.log(terminal3.getState() + " - после включения на пульте охраны 1");
terminal1.turnOff();
console.log(terminal3.getState() + " - после выключения на пульте охраны 1");
terminal2.turnOn();
console.log(terminal3.getState() + " - после включения на пульте охраны 2");
terminal2.turnOff();
console.log(terminal3.getState() + " - после выключения на пульте охраны 2");
