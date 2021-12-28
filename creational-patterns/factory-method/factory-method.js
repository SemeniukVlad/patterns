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
var Chair = /** @class */ (function () {
    function Chair(material, width, height, depth, foldable) {
        this.material = material;
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.foldable = foldable;
    }
    Chair.prototype.getStats = function () {
        return "\n".concat(this.material) + ' - материал, \n'
            + "".concat(this.width) + 'мм - ширина, \n'
            + "".concat(this.height) + 'мм - высота, \n'
            + "".concat(this.depth) + 'мм - длина, \n'
            + 'сгибаемый? ' + "".concat(this.foldable);
    };
    return Chair;
}());
var Desk = /** @class */ (function () {
    function Desk(material, width, height, depth, drawers) {
        this.material = material;
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.drawers = drawers;
    }
    Desk.prototype.getStats = function () {
        return "\n".concat(this.material) + ' - материал, \n'
            + "".concat(this.width) + 'мм - ширина, \n'
            + "".concat(this.height) + 'мм - высота, \n'
            + "".concat(this.depth) + 'мм - длина, \n'
            + "".concat(this.drawers) + ' - кол-во ящиков';
    };
    return Desk;
}());
var FurnitureFactory = /** @class */ (function () {
    function FurnitureFactory() {
    }
    return FurnitureFactory;
}());
var ChairFactory = /** @class */ (function (_super) {
    __extends(ChairFactory, _super);
    function ChairFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChairFactory.prototype.produce = function (name) {
        if (name == 'chair') {
            return new Chair('fabric', 650, 1100, 580, true);
        }
    };
    return ChairFactory;
}(FurnitureFactory));
var DeskFactory = /** @class */ (function (_super) {
    __extends(DeskFactory, _super);
    function DeskFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeskFactory.prototype.produce = function (name) {
        if (name == 'desk') {
            return new Desk('wood', 1100, 750, 500, 2);
        }
        if (name == 'deskDeluxe') {
            return new Desk('wood', 1100, 1000, 500, 4);
        }
    };
    return DeskFactory;
}(FurnitureFactory));
var chairFactory = new ChairFactory();
var deskFactory = new DeskFactory();
var desk = deskFactory.produce('desk');
var deskDeluxe = deskFactory.produce('deskDeluxe');
var chair = chairFactory.produce('chair');
console.log(desk);
console.log(deskDeluxe);
console.log(chair);
console.log(desk.getStats());
console.log(deskDeluxe.getStats());
console.log(chair.getStats());
