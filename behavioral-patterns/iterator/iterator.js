var CatalogIterator = /** @class */ (function () {
    function CatalogIterator(list, pos) {
        if (list === void 0) { list = []; }
        if (pos === void 0) { pos = 0; }
        this.list = list;
        this.pos = pos;
    }
    CatalogIterator.prototype.next = function () {
        this.pos++;
        var result = this.list[this.pos];
        return result;
    };
    CatalogIterator.prototype.prev = function () {
        this.pos--;
        var result = this.list[this.pos];
        return result;
    };
    CatalogIterator.prototype.current = function () {
        var result = this.list[this.pos];
        return result;
    };
    CatalogIterator.prototype.hasNext = function () {
        return this.pos < this.list.length - 1;
    };
    CatalogIterator.prototype.hasPrev = function () {
        return this.pos > 0;
    };
    return CatalogIterator;
}());
var Catalog = /** @class */ (function () {
    function Catalog(list) {
        if (list === void 0) { list = []; }
        this.list = list;
    }
    Catalog.prototype.createIterator = function () {
        return new CatalogIterator(this.list);
    };
    return Catalog;
}());
var items = ['phone', 'book', 'lamp', 'cup', 'cap'];
var catalog = new Catalog(items);
var item = catalog.createIterator();
console.log(item.current());
console.log(item.next());
console.log(item.next());
console.log(item.prev());
console.log(item.next());
console.log(item.hasNext());
console.log(item.next());
console.log(item.next());
console.log(item.hasNext());
console.log(item.current());
console.log(item.hasPrev());
console.log(item.prev());
console.log(item.prev());
console.log(item.prev());
console.log(item.prev());
console.log(item.hasPrev());
