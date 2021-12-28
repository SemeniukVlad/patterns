interface Blender{
    blenderProduction(material: string, power: number, cupVolume: number): Blender;
}

class TefalBlender implements Blender {
    
    public material: string;
    public power: number;
    public cupVolume: number;

    blenderProduction(material: string, power: number, cupVolume: number): Blender {
        this.material = material;
        this.power = power;
        this.cupVolume = cupVolume;
        console.log('Producing a blender using Tefal technologies and according to specifications');
        return this;
    }
}

class PhillipsBlender implements Blender {

    public material: string;
    public power: number;
    public cupVolume: number;


    blenderProduction(material: string, power: number, cupVolume: number): Blender{
        this.material = material;
        this.power = power;
        this.cupVolume = cupVolume;
        console.log('Producing a blender according to specifications using super secret and new Phillips technologies');
        return this;
    }
}






interface Toaster{
    toasterProduction(slots: number, modes: number, power: number): Toaster ;
}

class TefalToaster implements Toaster {

    public slots: number;
    public modes: number;
    public power: number;
    
    toasterProduction(slots: number, modes: number, power: number): Toaster {
        this.slots = slots;
        this.modes = modes;
        this.power = power;
        console.log('Producing a regular toaster but it\'s made on a Tefal factory using their tech');
        return this;
    }
}

class PhillipsToaster implements Toaster {

    public slots: number;
    public modes: number;
    public power: number;
    
    toasterProduction(slots: number, modes: number, power: number): Toaster {
        this.slots = slots;
        this.modes = modes;
        this.power = power;
        console.log('Producing a revolution in toasters right here on a Phillips factory');
        return this;
    }
}





interface TechFactory {

    newBlender(): Blender;
    newToaster(): Toaster;
}

class TefalFactory implements TechFactory {

    public newBlender(): Blender{
        const factory = new TefalBlender();
        return factory.blenderProduction('metal', 1000, 800);
    }
    public newToaster(): Toaster{
        const factory = new TefalToaster();
        return factory.toasterProduction(2, 7, 850);
    }
}

class PhillipsFactory implements TechFactory {

    public newBlender(): Blender{
        const factory = new PhillipsBlender();
        return factory.blenderProduction('metal', 650, 500);
    }
    public newToaster(): Toaster{
        const factory = new PhillipsToaster();
        return factory.toasterProduction(2, 8, 830);
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