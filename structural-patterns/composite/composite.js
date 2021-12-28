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
var Cart = /** @class */ (function () {
    function Cart() {
    }
    Cart.prototype.add = function (item) { };
    ;
    Cart.prototype.remove = function (item) { };
    ;
    return Cart;
}());
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Item.prototype.count = function () {
        console.log('i am counted');
        return 1;
    };
    return Item;
}(Cart));
var CartComposite = /** @class */ (function (_super) {
    __extends(CartComposite, _super);
    function CartComposite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = [];
        return _this;
    }
    CartComposite.prototype.add = function (item) {
        this.items.push(item);
    };
    CartComposite.prototype.remove = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    CartComposite.prototype.count = function () {
        var result = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            result += item.count();
        }
        return result;
    };
    return CartComposite;
}(Cart));
var composite = new CartComposite();
var item1 = new Item();
var item2 = new Item();
var item3 = new Item();
composite.add(item1);
composite.add(item2);
console.log(composite.count());
composite.remove(item1);
console.log(composite.count());
composite.add(item1);
composite.add(item3);
console.log(composite.count());
