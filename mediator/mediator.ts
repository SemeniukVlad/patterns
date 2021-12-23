interface Mediator {
    checkout(name: string, job:string, item: string): void;
    addOrder(name: string, order: string): void;
    showOrders(name: string): void;
}

class MediatorMaster implements Mediator {

    private repair: RepairComponent;
    private newItem: NewItemComponent;
    private client: ClientComponent;
    public orderList: object = {};

    constructor(repair: RepairComponent, newItem: NewItemComponent, client: ClientComponent) {
        this.repair = repair;
        this.repair.setMediator(this);
        this.newItem = newItem;
        this.newItem.setMediator(this);
        this.client = client;
        this.client.setMediator(this);
    }

    public checkout(name: string, job:string, item: string): void {
        if (job === 'repair') {
            this.repair.placeOrder(name, item);
        }

        if (job === 'new-item') {
            this.newItem.placeOrder(name, item);
        }
    }

    public addOrder(name: string, order: string): void{
        if (!this.orderList[name]){
            this.orderList[name] = {};
            this.orderList[name].orders = [];
            this.orderList[name].orders.push(order);
        } else {
            this.orderList[name].orders.push(order);
        }

    }

    public showOrders(name: string): void{
        console.log(this.orderList[name].orders);
    }

    
}

class Component {
    protected mediator: Mediator;

    constructor(mediator: Mediator = null) {
        this.mediator = mediator;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class RepairComponent extends Component {

    public placeOrder(name: string, item: string): void {
        let order: string = `${name} has ordered to repair a ${item}`;
        console.log(order);
        this.mediator.addOrder(name, order);
    }
}

class NewItemComponent extends Component {

    public placeOrder(name: string, item: string): void {
        let order: string = `${name} has ordered a custom-made ${item}`;
        console.log(order);
        this.mediator.addOrder(name, order);
    }
}

class ClientComponent extends Component{
    public name: string;
    setName(name: string): void{
        this.name = name;
    }

    setOrder(job: string, item: string): void{
        this.mediator.checkout(this.name, job, item);
    }

    orders(): void{
        this.mediator.showOrders(this.name)
    }
}

const repairShop = new RepairComponent();
const makerShop = new NewItemComponent();
const client = new ClientComponent();

const mediator = new MediatorMaster(repairShop, makerShop, client);

client.setName('Alex');
client.setOrder('repair', 'watch');
client.setOrder('new-item', 'statue');
client.orders();
console.log(mediator.orderList);
