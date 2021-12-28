var DescriptionFacade = /** @class */ (function () {
    function DescriptionFacade(properties) {
        if (properties === void 0) { properties = new Properties(); }
        this.properties = properties;
    }
    DescriptionFacade.prototype.shortDesc = function () {
        return "".concat(this.properties.type, "\n").concat(this.properties.series, "\nprice: ").concat(this.properties.price);
    };
    DescriptionFacade.prototype.fullDesc = function () {
        return "".concat(this.properties.type, "\nheight: ").concat(this.properties.height, "\nwidth: ").concat(this.properties.width, "\nlength: ").concat(this.properties.length, "\n").concat(this.properties.series, "\nprice: ").concat(this.properties.price);
    };
    DescriptionFacade.prototype.shortDescDiscount = function () {
        return "".concat(this.properties.type, "\n").concat(this.properties.series, "\nprice: ").concat(this.properties.price - 500);
    };
    DescriptionFacade.prototype.fullDescDiscount = function () {
        return "".concat(this.properties.type, "\nheight: ").concat(this.properties.height, "\nwidth: ").concat(this.properties.width, "\nlength: ").concat(this.properties.length, "\n").concat(this.properties.series, "\nprice: ").concat(this.properties.price - 500);
    };
    return DescriptionFacade;
}());
var Properties = /** @class */ (function () {
    function Properties(type, height, width, length, series, price) {
        if (type === void 0) { type = 'desk'; }
        if (height === void 0) { height = 100; }
        if (width === void 0) { width = 300; }
        if (length === void 0) { length = 150; }
        if (series === void 0) { series = 'Mark 2 Omega'; }
        if (price === void 0) { price = 5000; }
        this.type = type;
        this.height = height;
        this.width = width;
        this.length = length;
        this.series = series;
        this.price = price;
    }
    return Properties;
}());
var facade = new DescriptionFacade();
console.log(facade.shortDesc());
console.log(facade.shortDescDiscount());
console.log(facade.fullDesc());
console.log(facade.fullDescDiscount());
