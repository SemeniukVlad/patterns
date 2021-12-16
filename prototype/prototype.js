var Human = /** @class */ (function () {
    function Human(height, weight, hairColor) {
        this.height = height;
        this.weight = weight;
        this.hairColor = hairColor;
    }
    Human.prototype.clone = function () {
        return new Human(this.height, this.weight, this.hairColor);
    };
    return Human;
}());
var human = new Human(185, 75, 'brown');
var clonedHuman = human.clone();
clonedHuman.hairColor = 'blonde';
console.log(human);
console.log(clonedHuman);
