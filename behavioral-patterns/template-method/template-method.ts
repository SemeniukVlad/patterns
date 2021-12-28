abstract class BaseClass {

    public templateMethod(): void {
        this.preparing();
        this.dough();
        this.tomato();
        this.cheese();
        this.bake();
        this.addMainIngridient();
        this.done();
    }

    protected preparing(): void {
        console.log('preparing the ingridients');
    }

    protected dough(): void {
        console.log('making dough');
    }

    protected tomato(): void {
        console.log('making a tomato sauce');
    }

    protected cheese(): void {
        console.log('adding cheese');
    }

    protected bake(): void {
        console.log('baking');
    }

    protected abstract addMainIngridient(): void;

    protected done(): void {
        console.log('done');
    }

}

class Pepperoni extends BaseClass {

    protected addMainIngridient(): void {
        console.log("adding pepperoni");
    }
}

class Chicken extends BaseClass {

    protected addMainIngridient(): void {
        console.log("adding chicken");
    }
}

const pepperoni: Pepperoni = new Pepperoni() 
const chicken: Chicken = new Chicken() 

pepperoni.templateMethod();
chicken.templateMethod();
