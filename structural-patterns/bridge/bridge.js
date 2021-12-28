var Chair = /** @class */ (function () {
    function Chair(style) {
        this.style = style;
    }
    Chair.prototype.styling = function () {
        var type = this.style.style();
        return "".concat(type, " chair");
    };
    return Chair;
}());
var Rustic = /** @class */ (function () {
    function Rustic() {
    }
    Rustic.prototype.style = function () {
        return 'Rustic';
    };
    return Rustic;
}());
var Modern = /** @class */ (function () {
    function Modern() {
    }
    Modern.prototype.style = function () {
        return 'Modern';
    };
    return Modern;
}());
var rusticChair = new Chair(new Rustic());
console.log(rusticChair.styling());
var modernChair = new Chair(new Modern());
console.log(modernChair.styling());
