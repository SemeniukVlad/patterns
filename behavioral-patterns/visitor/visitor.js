var ProductionStatistics = /** @class */ (function () {
    function ProductionStatistics(values1, values2) {
        this.values1 = values1;
        this.values2 = values2;
    }
    ProductionStatistics.prototype.accept = function (visitor) {
        visitor.evaluate(this);
    };
    ProductionStatistics.prototype.calculateValues1 = function () {
        var result = 0;
        for (var _i = 0, _a = this.values1; _i < _a.length; _i++) {
            var value = _a[_i];
            result = result + value;
        }
        return result;
    };
    ProductionStatistics.prototype.calculateValues2 = function () {
        var result = 0;
        for (var _i = 0, _a = this.values2; _i < _a.length; _i++) {
            var value = _a[_i];
            result = result - value;
        }
        result = result + 100;
        return result;
    };
    return ProductionStatistics;
}());
var MarketingStatistics = /** @class */ (function () {
    function MarketingStatistics(values) {
        this.values = values;
    }
    MarketingStatistics.prototype.accept = function (visitor) {
        visitor.evaluate(this);
    };
    MarketingStatistics.prototype.calculateValues = function () {
        var result = 0;
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var value = _a[_i];
            result = result + value;
        }
        return result;
    };
    return MarketingStatistics;
}());
var EvaluationVisitor = /** @class */ (function () {
    function EvaluationVisitor() {
    }
    EvaluationVisitor.prototype.evaluate = function (statistics) {
        if (statistics instanceof ProductionStatistics) {
            console.log("the results of calculations are: ".concat(statistics.calculateValues1(), " and ").concat(statistics.calculateValues2()));
        }
        if (statistics instanceof MarketingStatistics) {
            console.log("the result of calculations is: ".concat(statistics.calculateValues()));
        }
    };
    return EvaluationVisitor;
}());
var updatedProductionValues1 = [330, 220, 1];
var updatedProductionValues2 = [13, 5, 1];
var newMarketingValues = [20, 5];
var production1 = new ProductionStatistics(updatedProductionValues1, updatedProductionValues2);
var marketing = new MarketingStatistics(newMarketingValues);
var evaluator = new EvaluationVisitor();
production1.accept(evaluator);
marketing.accept(evaluator);
