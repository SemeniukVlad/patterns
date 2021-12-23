interface MainIterator {

    next(): any;
    prev(): any;
    current(): any;
    hasNext(): boolean;
    hasPrev(): boolean;
}

interface Aggregator {
    createIterator(): MainIterator;
}

class CatalogIterator implements MainIterator {

    constructor(
        private list: any[] = [],
        private pos: number = 0
        ) {}

    public next(): any {
        this.pos++;
        let result = this.list[this.pos];
        return result;
    }

    public prev(): any {
        this.pos--;
        let result = this.list[this.pos];
        return result;
    }

    public current():any {
        let result = this.list[this.pos];
        return result;
    }

    public hasNext(): boolean {
        return this.pos < this.list.length-1;
    }
    public hasPrev(): boolean {
        return this.pos > 0;
    }
}

class Catalog implements Aggregator {
    
    constructor(
        private list: string[] = []
    ) {}
    public createIterator(): MainIterator {
        return new CatalogIterator(this.list);
    }
}


const items = ['phone', 'book', 'lamp', 'cup', 'cap'];
const catalog = new Catalog(items);
const item: MainIterator = catalog.createIterator();

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
