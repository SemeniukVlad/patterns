interface Handler {

    next(handler: Handler): Handler;
    handle(item: string): string;
}

abstract class HandlerBase implements Handler
{
    private nextHandler: Handler;

    public next(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(item: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(item);
        }
        return null;
    }
}


class MetalHandler extends HandlerBase {
    public list: any = ['lamp', 'carPart', 'doorKnob'];
    public handle(item: string): string {
        if (this.list.includes(item)) {
            return `${item} is made of metal`;
        } else{
            console.log(`${item} is not metal`);
            return super.handle(item);
        }
    }
}

class WoodHandler extends HandlerBase {
    public list: any = ['chair', 'table', 'shelf'];
    public handle(item: string): string {
        if (this.list.includes(item)) {
            return `${item} is made of wood`;
        } else{
            console.log(`${item} is not wooden`);
            return super.handle(item);
        } 
    }
}

class PlasticHandler extends HandlerBase {
    public list: any = ['toyCar', 'ruler', 'casing'];
    public handle(item: string): string {
        if (this.list.includes(item)) {
            return `${item} is made of plastic`;
        } else{
            console.log(`${item} is not plastic`);
            return super.handle(item);
        }
    }
}


const itemsList = ['chair', 'lamp', 'ruler'];

const first = new MetalHandler();
const second = new WoodHandler();
const last = new PlasticHandler();

first.next(second).next(last);

for (let item of itemsList){
    console.log(first.handle(item));
}