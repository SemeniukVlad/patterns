interface Furniture{
    material: string, 
    width: number, 
    height: number, 
    depth: number,
    getStats(): string,
}

class Chair implements Furniture {

    constructor (
        public material: string, 
        public width: number, 
        public height: number, 
        public depth: number, 
        public foldable: boolean
    ){}

    public getStats(): string {
        return `\n${this.material}` + ' - материал, \n'
                +`${this.width}` + 'мм - ширина, \n'
                +`${this.height}` + 'мм - высота, \n'
                +`${this.depth}` + 'мм - длина, \n'
                + 'сгибаемый? ' + `${this.foldable}`
    }
}

class Desk implements Furniture {

    constructor (
        public material: string, 
        public width: number, 
        public height: number, 
        public depth: number, 
        public drawers: number | string
    ){}

    public getStats(): string {
        return `\n${this.material}` + ' - материал, \n'
                +`${this.width}` + 'мм - ширина, \n'
                +`${this.height}` + 'мм - высота, \n'
                +`${this.depth}` + 'мм - длина, \n'
                + `${this.drawers}` + ' - кол-во ящиков' 
    }

}

abstract class FurnitureFactory {

    public abstract produce(name: string): Furniture;
}

class ChairFactory extends FurnitureFactory{

    public produce(name: string): Furniture{
        if (name == 'chair') {
            return new Chair('fabric', 650, 1100, 580, true);
        }
    }
}
class DeskFactory extends FurnitureFactory{

    public produce(name: string): Furniture{
        if (name == 'desk') {
            return new Desk('wood', 1100, 750, 500, 2);
        }
        if (name == 'deskDeluxe') {
            return new Desk('wood', 1100, 1000, 500, 4);
        }
    }
}

const chairFactory = new ChairFactory();
const deskFactory = new DeskFactory();

const desk = deskFactory.produce('desk');
const deskDeluxe = deskFactory.produce('deskDeluxe');
const chair = chairFactory.produce('chair');

console.log(desk);
console.log(deskDeluxe);
console.log(chair);
console.log(desk.getStats());
console.log(deskDeluxe.getStats());
console.log(chair.getStats());