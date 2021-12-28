interface Option {
    execute(): void;
}

class ThemeChangeLight implements Option  {

    constructor(
        private theme: Themes
    ) {}

    public execute(): void {
        console.log('Changed to light theme');
        this.theme.light();
    }
}
class ThemeChangeDark implements Option  {

    constructor(
        private theme: Themes
    ) {}

    public execute(): void {
        console.log('Changed to Dark theme');
        this.theme.dark();
    }
}

class Themes {
    private current: string = 'Light';

    public light(): void {
        this.current = 'Light';
    }

    public dark(): void {
        this.current = 'Dark';
    }

    public showCurrent(): string{
        return this.current;
    }
}

class ThemeChanger {
    private option: Option;

    public ChangeToLight(option: Option): void {
        this.option = option;
        this.option.execute();
    }

    public ChangeToDark(option: Option): void {
        this.option = option;
        this.option.execute();
    }
}

const changer = new ThemeChanger();
const themes = new Themes();

changer.ChangeToDark(new ThemeChangeDark(themes));
console.log(themes.showCurrent());
changer.ChangeToLight(new ThemeChangeLight(themes));
console.log(themes.showCurrent());