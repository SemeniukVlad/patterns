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
var TestsContext = /** @class */ (function () {
    function TestsContext(state) {
        this.next(state);
    }
    TestsContext.prototype.next = function (state) {
        this.state = state;
        this.state.setContext(this);
    };
    TestsContext.prototype.test = function () {
        this.state.handle();
    };
    return TestsContext;
}());
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setContext = function (context) {
        this.context = context;
    };
    return State;
}());
var LowPerfomanceTest = /** @class */ (function (_super) {
    __extends(LowPerfomanceTest, _super);
    function LowPerfomanceTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPerfomanceTest.prototype.handle = function () {
        console.log('Phone charge test on low perfomance');
        console.log('preparing to move to a next test');
        this.context.next(new HighPerfomanceTest());
    };
    return LowPerfomanceTest;
}(State));
var HighPerfomanceTest = /** @class */ (function (_super) {
    __extends(HighPerfomanceTest, _super);
    function HighPerfomanceTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HighPerfomanceTest.prototype.handle = function () {
        console.log('Phone charge test on high perfomance');
        console.log('preparing to move to a next test');
        this.context.next(new DamageTest());
    };
    return HighPerfomanceTest;
}(State));
var DamageTest = /** @class */ (function (_super) {
    __extends(DamageTest, _super);
    function DamageTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DamageTest.prototype.handle = function () {
        console.log('Damage test');
    };
    return DamageTest;
}(State));
var tests = new TestsContext(new LowPerfomanceTest());
tests.test();
tests.test();
tests.test();
