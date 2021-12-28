var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FirstCalculator = /** @class */ (function () {
    function FirstCalculator() {
    }
    FirstCalculator.prototype.execute = function (operation, value1, value2) {
        if (operation === 'add') {
            return value1 + value2;
        }
    };
    return FirstCalculator;
}());
var Upgrade = /** @class */ (function () {
    function Upgrade(base) {
        this.base = base;
    }
    Upgrade.prototype.execute = function (operation, value1, value2) {
        return this.base.execute(operation, value1, value2);
    };
    return Upgrade;
}());
var SubtractUpgrade = /** @class */ (function (_super) {
    __extends(SubtractUpgrade, _super);
    function SubtractUpgrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubtractUpgrade.prototype.execute = function (operation, value1, value2) {
        if (operation === 'sub') {
            return value1 - value2;
        }
        return _super.prototype.execute.call(this, operation, value1, value2);
    };
    return SubtractUpgrade;
}(Upgrade));
var MultiplyUpgrade = /** @class */ (function (_super) {
    __extends(MultiplyUpgrade, _super);
    function MultiplyUpgrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiplyUpgrade.prototype.execute = function (operation, value1, value2) {
        if (operation === 'multi') {
            return value1 * value2;
        }
        return _super.prototype.execute.call(this, operation, value1, value2);
    };
    return MultiplyUpgrade;
}(Upgrade));
var DivideUpgrade = /** @class */ (function (_super) {
    __extends(DivideUpgrade, _super);
    function DivideUpgrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DivideUpgrade.prototype.execute = function (operation, value1, value2) {
        if (operation === 'plus') {
            return value1 / value2;
        }
        return _super.prototype.execute.call(this, operation, value1, value2);
    };
    return DivideUpgrade;
}(Upgrade));
var calc = new FirstCalculator();
console.log(calc.execute('add', 2, 4));
var calcPlus = new SubtractUpgrade(calc);
console.log(calcPlus.execute('sub', 2, 4));
var calcUltimate = new MultiplyUpgrade(calcPlus);
console.log(calcUltimate.execute('multi', 2, 4));
console.log(calcUltimate.execute('sub', 2, 4));
console.log(calcUltimate.execute('add', 2, 4));
var calcMega = new DivideUpgrade(calcUltimate);
console.log(calcMega.execute('multi', 2, 4));
console.log(calcMega.execute('sub', 2, 4));
console.log(calcMega.execute('add', 2, 4));
console.log(calcMega.execute('plus', 2, 4));
