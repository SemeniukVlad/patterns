interface CloningMachine{
    clone(): Human;
}

class Human implements CloningMachine{
    constructor(
        public height: number,
        public weight: number,
        public hairColor: string,
    ){}

    public clone(): Human{
        return new Human(
            this.height,
            this.weight,
            this.hairColor
        );
    }
}

const human = new Human(185, 75, 'brown');
const clonedHuman = human.clone();
clonedHuman.hairColor = 'blonde';

console.log(human);
console.log(clonedHuman);