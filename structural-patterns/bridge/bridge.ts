class Chair {
    
    constructor(
        protected style: Style
    ) {}

    public styling(): string {
        const type = this.style.style();
        return `${type} chair`;
    }
}

interface Style {
    style(): string;
}

class Rustic implements Style {
    public style(): string {
        return 'Rustic';
    }
}

class Modern implements Style {
    public style(): string {
        return 'Modern';
    }
}

const rusticChair = new Chair(new Rustic());
console.log(rusticChair.styling());
const modernChair = new Chair(new Modern());
console.log(modernChair.styling());