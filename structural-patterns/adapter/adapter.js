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
var Ciphered = /** @class */ (function () {
    function Ciphered() {
    }
    Ciphered.prototype.read = function () {
        return 21417174219;
    };
    return Ciphered;
}());
var TextString = /** @class */ (function () {
    function TextString(sentence) {
        this.sentence = sentence;
    }
    TextString.prototype.unfiltered = function () {
        return this.sentence;
    };
    return TextString;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(textString) {
        var _this = _super.call(this) || this;
        _this.cipher = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        _this.textString = textString;
        return _this;
    }
    Adapter.prototype.read = function () {
        var sentence = this.textString.unfiltered().toLowerCase();
        var letterList = [];
        var resultList = [];
        for (var _i = 0, sentence_1 = sentence; _i < sentence_1.length; _i++) {
            var letter = sentence_1[_i];
            letterList.push(letter);
        }
        for (var _a = 0, letterList_1 = letterList; _a < letterList_1.length; _a++) {
            var item = letterList_1[_a];
            resultList.push(this.cipher.indexOf(item));
        }
        var result = resultList.join('');
        return +result;
    };
    return Adapter;
}(Ciphered));
var ciphered = new Ciphered();
var textString = new TextString('correct');
var adapter = new Adapter(textString);
console.log(textString.unfiltered());
console.log(ciphered.read());
console.log(adapter.read());
