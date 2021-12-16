interface Blender{
    material: string, 
    power: number,
    cupVolume: number,
}

class TefalBlender implements Blender {

    constructor (
        public material: string, 
        public power: number,
        public cupVolume: number,
    ){}
}

class PhillipsBlender implements Blender {

    constructor (
        public material: string, 
        public power: number,
        public cupVolume: number,
    ){}
}






interface Toaster{
    slots: number,
    modes: number,
    power: number,
}

class TefalToaster implements Toaster {

    constructor (
        public slots: number,
        public modes: number,
        public power: number,
    ){}
}

class PhillipsToaster implements Toaster {

    constructor (
        public slots: number,
        public modes: number,
        public power: number,
    ){}
}





interface TechFactory {

    newBlender(): Blender;
    newToaster(): Toaster;
}

class TefalFactory implements TechFactory {

    public newBlender(): Blender{
        return new TefalBlender('metal', 1000, 800);
    }
    public newToaster(): Toaster{
        return new TefalToaster(2, 7, 850);
    }
}

class PhillipsFactory implements TechFactory {

    public newBlender(): Blender{
        return new PhillipsBlender('metal', 650, 500);
    }
    public newToaster(): Toaster{
        return new PhillipsToaster(2, 8, 830);
    }
}


const tefal = new TefalFactory();
const phillips = new PhillipsFactory();

const tefalBlender = tefal.newBlender();
const tefalToaster = tefal.newToaster();

const phillipsBlender = phillips.newBlender();
const phillipsToaster = phillips.newToaster();

console.log(tefalBlender);
console.log(tefalToaster);
console.log(phillipsBlender);
console.log(phillipsToaster);