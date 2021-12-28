var ThemeChangeLight = /** @class */ (function () {
    function ThemeChangeLight(theme) {
        this.theme = theme;
    }
    ThemeChangeLight.prototype.execute = function () {
        console.log('Changed to light theme');
        this.theme.light();
    };
    return ThemeChangeLight;
}());
var ThemeChangeDark = /** @class */ (function () {
    function ThemeChangeDark(theme) {
        this.theme = theme;
    }
    ThemeChangeDark.prototype.execute = function () {
        console.log('Changed to Dark theme');
        this.theme.dark();
    };
    return ThemeChangeDark;
}());
var Themes = /** @class */ (function () {
    function Themes() {
        this.current = 'Light';
    }
    Themes.prototype.light = function () {
        this.current = 'Light';
    };
    Themes.prototype.dark = function () {
        this.current = 'Dark';
    };
    Themes.prototype.showCurrent = function () {
        return this.current;
    };
    return Themes;
}());
var ThemeChanger = /** @class */ (function () {
    function ThemeChanger() {
    }
    ThemeChanger.prototype.ChangeToLight = function (option) {
        this.option = option;
        this.option.execute();
    };
    ThemeChanger.prototype.ChangeToDark = function (option) {
        this.option = option;
        this.option.execute();
    };
    return ThemeChanger;
}());
var changer = new ThemeChanger();
var themes = new Themes();
changer.ChangeToDark(new ThemeChangeDark(themes));
console.log(themes.showCurrent());
changer.ChangeToLight(new ThemeChangeLight(themes));
console.log(themes.showCurrent());
