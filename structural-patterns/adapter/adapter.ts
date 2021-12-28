class Ciphered {
    public read(): number {
        return 21417174219;
    }
}

class TextString {
    constructor(
        public sentence: string
    ){}
    public unfiltered(): string {
        return this.sentence;
    }
}

class Adapter extends Ciphered {
    private textString: TextString;
    private cipher: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    constructor(textString: TextString) {
        super();
        this.textString = textString;
    }

    public read(): number{
        let sentence = this.textString.unfiltered().toLowerCase();
        let letterList = [];
        let resultList = [];
        for (let letter of sentence){
            letterList.push(letter);
        }
        for (let item of letterList){
            resultList.push(this.cipher.indexOf(item));
        }
        let result = resultList.join('');
        return +result;
    }
}

const ciphered = new Ciphered();
const textString = new TextString('correct');
const adapter = new Adapter(textString);
console.log(textString.unfiltered());
console.log(ciphered.read());
console.log(adapter.read());

