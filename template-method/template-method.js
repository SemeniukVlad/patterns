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
var BaseClass = /** @class */ (function () {
    function BaseClass() {
    }
    BaseClass.prototype.templateMethod = function () {
        this.preparing();
        this.dough();
        this.tomato();
        this.cheese();
        this.bake();
        this.addMainIngridient();
        this.done();
    };
    BaseClass.prototype.preparing = function () {
        console.log('preparing the ingridients');
    };
    BaseClass.prototype.dough = function () {
        console.log('making dough');
    };
    BaseClass.prototype.tomato = function () {
        console.log('making a tomato sauce');
    };
    BaseClass.prototype.cheese = function () {
        console.log('adding cheese');
    };
    BaseClass.prototype.bake = function () {
        console.log('baking');
    };
    BaseClass.prototype.done = function () {
        console.log('done');
    };
    return BaseClass;
}());
var Pepperoni = /** @class */ (function (_super) {
    __extends(Pepperoni, _super);
    function Pepperoni() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pepperoni.prototype.addMainIngridient = function () {
        console.log("adding pepperoni");
    };
    return Pepperoni;
}(BaseClass));
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chicken.prototype.addMainIngridient = function () {
        console.log("adding chicken");
    };
    return Chicken;
}(BaseClass));
var pepperoni = new Pepperoni();
var chicken = new Chicken();
pepperoni.templateMethod();
chicken.templateMethod();
