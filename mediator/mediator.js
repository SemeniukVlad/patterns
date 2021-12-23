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
var MediatorMaster = /** @class */ (function () {
    function MediatorMaster(repair, newItem, client) {
        this.orderList = {};
        this.repair = repair;
        this.repair.setMediator(this);
        this.newItem = newItem;
        this.newItem.setMediator(this);
        this.client = client;
        this.client.setMediator(this);
    }
    MediatorMaster.prototype.checkout = function (name, job, item) {
        if (job === 'repair') {
            this.repair.placeOrder(name, item);
        }
        if (job === 'new-item') {
            this.newItem.placeOrder(name, item);
        }
    };
    MediatorMaster.prototype.addOrder = function (name, order) {
        if (!this.orderList[name]) {
            this.orderList[name] = {};
            this.orderList[name].orders = [];
            this.orderList[name].orders.push(order);
        }
        else {
            this.orderList[name].orders.push(order);
        }
    };
    MediatorMaster.prototype.showOrders = function (name) {
        console.log(this.orderList[name].orders);
    };
    return MediatorMaster;
}());
var Component = /** @class */ (function () {
    function Component(mediator) {
        if (mediator === void 0) { mediator = null; }
        this.mediator = mediator;
    }
    Component.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return Component;
}());
var RepairComponent = /** @class */ (function (_super) {
    __extends(RepairComponent, _super);
    function RepairComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RepairComponent.prototype.placeOrder = function (name, item) {
        var order = "".concat(name, " has ordered to repair a ").concat(item);
        console.log(order);
        this.mediator.addOrder(name, order);
    };
    return RepairComponent;
}(Component));
var NewItemComponent = /** @class */ (function (_super) {
    __extends(NewItemComponent, _super);
    function NewItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewItemComponent.prototype.placeOrder = function (name, item) {
        var order = "".concat(name, " has ordered a custom-made ").concat(item);
        console.log(order);
        this.mediator.addOrder(name, order);
    };
    return NewItemComponent;
}(Component));
var ClientComponent = /** @class */ (function (_super) {
    __extends(ClientComponent, _super);
    function ClientComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientComponent.prototype.setName = function (name) {
        this.name = name;
    };
    ClientComponent.prototype.setOrder = function (job, item) {
        this.mediator.checkout(this.name, job, item);
    };
    ClientComponent.prototype.orders = function () {
        this.mediator.showOrders(this.name);
    };
    return ClientComponent;
}(Component));
var repairShop = new RepairComponent();
var makerShop = new NewItemComponent();
var client = new ClientComponent();
var mediator = new MediatorMaster(repairShop, makerShop, client);
client.setName('Alex');
client.setOrder('repair', 'watch');
client.setOrder('new-item', 'statue');
client.orders();
console.log(mediator.orderList);
