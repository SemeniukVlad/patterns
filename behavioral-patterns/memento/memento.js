var DataScreen = /** @class */ (function () {
    function DataScreen(data) {
        this.data = data;
    }
    DataScreen.prototype.updateData = function (data) {
        this.data = data;
        console.log("data values has been updated to ".concat(this.data));
    };
    DataScreen.prototype.save = function () {
        return new DataValue(this.data);
    };
    return DataScreen;
}());
var DataValue = /** @class */ (function () {
    function DataValue(data) {
        this.data = data;
    }
    DataValue.prototype.getData = function () {
        return this.data;
    };
    return DataValue;
}());
var Memory = /** @class */ (function () {
    function Memory(dataScreen, history) {
        if (history === void 0) { history = []; }
        this.dataScreen = dataScreen;
        this.history = history;
    }
    Memory.prototype.addToMemory = function () {
        console.log('data values has been added to memory');
        this.history.push(this.dataScreen.save());
    };
    Memory.prototype.restoreFromMemorySlot = function (index) {
        console.log("data from slot ".concat(index, " was restored"));
        this.dataScreen.updateData(this.history[index].getData());
    };
    Memory.prototype.showHistory = function () {
        console.log('History:');
        for (var _i = 0, _a = this.history; _i < _a.length; _i++) {
            var dataSlot = _a[_i];
            console.log(dataSlot.getData());
        }
    };
    return Memory;
}());
var values = [66, 89, 0];
var dataScreen = new DataScreen(values);
var memory = new Memory(dataScreen);
memory.addToMemory();
memory.showHistory();
values = [89, 90, 2];
dataScreen.updateData(values);
memory.addToMemory();
memory.showHistory();
memory.restoreFromMemorySlot(0);
memory.addToMemory();
memory.showHistory();
