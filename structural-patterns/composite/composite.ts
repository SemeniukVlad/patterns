abstract class Cart {

    public add(item: Cart): void{};

    public remove(item: Cart): void{};

    public abstract count(): number;
}

class Item extends Cart {
    public count(): number {
        console.log('i am counted')
        return 1;
    }
}


class CartComposite extends Cart {
    protected items: Cart[] = [];

    public add(item: Cart): void {
        this.items.push(item);
    }

    public remove(item: Cart): void {
        this.items.splice(this.items.indexOf(item), 1);
    }

    public count(): number {
        let result = 0
        for (const item of this.items) {
            result += item.count();
        }
        return result;
    }
}

const composite = new CartComposite();
const item1 = new Item();
const item2 = new Item();
const item3 = new Item();

composite.add(item1);
composite.add(item2);
console.log(composite.count());
composite.remove(item1);
console.log(composite.count());
composite.add(item1);
composite.add(item3);
console.log(composite.count());