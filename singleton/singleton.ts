class Security {
    private static system: Security;
    private static state: string = 'off';

    private constructor (){}

    public static newTerminal(): Security{
        if(!Security.system) {
            Security.system = new Security();
        }
        return Security.system;
    }

    public getState(): string{
        return Security.state;
    }

    public turnOn(): string{
        return Security.state = 'on';
    }

    public turnOff(): string{
        return Security.state = 'off';
    }
}

const terminal1 = Security.newTerminal();
const terminal2 = Security.newTerminal();
const terminal3 = Security.newTerminal();

console.log(terminal3.getState() + " - изначальное состояние");

terminal1.turnOn();
console.log(terminal3.getState() + " - после включения на пульте охраны 1");

terminal1.turnOff();
console.log(terminal3.getState() + " - после выключения на пульте охраны 1");

terminal2.turnOn();
console.log(terminal3.getState() + " - после включения на пульте охраны 2");

terminal2.turnOff();
console.log(terminal3.getState() + " - после выключения на пульте охраны 2");