var Building = /** @class */ (function () {
    function Building() {
    }
    Building.prototype.enter = function () {
        console.log('Welcome');
    };
    return Building;
}());
var BuildingProxy = /** @class */ (function () {
    function BuildingProxy(building) {
        this.building = building;
    }
    BuildingProxy.prototype.enter = function (clearanceLevel) {
        if (clearanceLevel > 1) {
            this.building.enter();
        }
        else {
            console.log('clearance level failure');
        }
    };
    return BuildingProxy;
}());
var RegularWorker = /** @class */ (function () {
    function RegularWorker(clearanceLevel) {
        if (clearanceLevel === void 0) { clearanceLevel = 1; }
        this.clearanceLevel = clearanceLevel;
    }
    RegularWorker.prototype.getClearance = function () {
        return this.clearanceLevel;
    };
    return RegularWorker;
}());
var HighProfileWorker = /** @class */ (function () {
    function HighProfileWorker(clearanceLevel) {
        if (clearanceLevel === void 0) { clearanceLevel = 2; }
        this.clearanceLevel = clearanceLevel;
    }
    HighProfileWorker.prototype.getClearance = function () {
        return this.clearanceLevel;
    };
    return HighProfileWorker;
}());
var bob = new RegularWorker();
var max = new HighProfileWorker();
var building = new Building();
var buildingSecurity = new BuildingProxy(building);
buildingSecurity.enter(bob.getClearance());
buildingSecurity.enter(max.getClearance());
