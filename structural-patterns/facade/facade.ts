class DescriptionFacade {

    constructor(
        protected properties: Properties = new Properties()
        ) {}

    public shortDesc(): string {
        return `${this.properties.type}\n${this.properties.series}\nprice: ${this.properties.price}`;
    }
    public fullDesc(): string {
        return `${this.properties.type}\nheight: ${this.properties.height}\nwidth: ${this.properties.width}\nlength: ${this.properties.length}\n${this.properties.series}\nprice: ${this.properties.price}`;
    }
    public shortDescDiscount(): string {
        return `${this.properties.type}\n${this.properties.series}\nprice: ${this.properties.price-500}`;
    }
    public fullDescDiscount(): string {
        return `${this.properties.type}\nheight: ${this.properties.height}\nwidth: ${this.properties.width}\nlength: ${this.properties.length}\n${this.properties.series}\nprice: ${this.properties.price-500}`;
    }
}

class Properties {
    constructor(
    public type: string = 'desk',
    public height: number = 100,
    public width: number = 300,
    public length: number = 150,
    public series: string = 'Mark 2 Omega',
    public price: number = 5000,
    ){}
}

const facade = new DescriptionFacade();
console.log(facade.shortDesc());
console.log(facade.shortDescDiscount());
console.log(facade.fullDesc());
console.log(facade.fullDescDiscount());