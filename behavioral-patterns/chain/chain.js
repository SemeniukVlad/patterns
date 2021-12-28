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
var HandlerBase = /** @class */ (function () {
    function HandlerBase() {
    }
    HandlerBase.prototype.next = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    HandlerBase.prototype.handle = function (item) {
        if (this.nextHandler) {
            return this.nextHandler.handle(item);
        }
        return null;
    };
    return HandlerBase;
}());
var MetalHandler = /** @class */ (function (_super) {
    __extends(MetalHandler, _super);
    function MetalHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = ['lamp', 'carPart', 'doorKnob'];
        return _this;
    }
    MetalHandler.prototype.handle = function (item) {
        if (this.list.includes(item)) {
            return "".concat(item, " is made of metal");
        }
        else {
            console.log("".concat(item, " is not metal"));
            return _super.prototype.handle.call(this, item);
        }
    };
    return MetalHandler;
}(HandlerBase));
var WoodHandler = /** @class */ (function (_super) {
    __extends(WoodHandler, _super);
    function WoodHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = ['chair', 'table', 'shelf'];
        return _this;
    }
    WoodHandler.prototype.handle = function (item) {
        if (this.list.includes(item)) {
            return "".concat(item, " is made of wood");
        }
        else {
            console.log("".concat(item, " is not wooden"));
            return _super.prototype.handle.call(this, item);
        }
    };
    return WoodHandler;
}(HandlerBase));
var PlasticHandler = /** @class */ (function (_super) {
    __extends(PlasticHandler, _super);
    function PlasticHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = ['toyCar', 'ruler', 'casing'];
        return _this;
    }
    PlasticHandler.prototype.handle = function (item) {
        if (this.list.includes(item)) {
            return "".concat(item, " is made of plastic");
        }
        else {
            console.log("".concat(item, " is not plastic"));
            return _super.prototype.handle.call(this, item);
        }
    };
    return PlasticHandler;
}(HandlerBase));
var itemsList = ['chair', 'lamp', 'ruler'];
var first = new MetalHandler();
var second = new WoodHandler();
var last = new PlasticHandler();
first.next(second).next(last);
for (var _i = 0, itemsList_1 = itemsList; _i < itemsList_1.length; _i++) {
    var item = itemsList_1[_i];
    console.log(first.handle(item));
}
