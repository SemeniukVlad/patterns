var PizzaBuilder = /** @class */ (function () {
    function PizzaBuilder(pizza) {
        if (pizza === void 0) { pizza = new Pizza(); }
        this.pizza = pizza;
    }
    PizzaBuilder.prototype.changeIngredient1 = function (ingredient1) {
        this.pizza.ingredient1 = ingredient1;
        return this;
    };
    PizzaBuilder.prototype.changeIngredient2 = function (ingredient2) {
        this.pizza.ingredient2 = ingredient2;
        return this;
    };
    PizzaBuilder.prototype.changeIngredient3 = function (ingredient3) {
        this.pizza.ingredient3 = ingredient3;
        return this;
    };
    PizzaBuilder.prototype.addIngredient4 = function (ingredient4) {
        this.pizza.ingredient4 = ingredient4;
        return this;
    };
    PizzaBuilder.prototype.addIngredient5 = function (ingredient5) {
        this.pizza.ingredient5 = ingredient5;
        return this;
    };
    PizzaBuilder.prototype.addIngredient6 = function (ingredient6) {
        this.pizza.ingredient6 = ingredient6;
        return this;
    };
    PizzaBuilder.prototype.changeSpecialSauce = function (specialSauce) {
        this.pizza.specialSauce = specialSauce;
        return this;
    };
    PizzaBuilder.prototype.build = function () {
        return this;
    };
    return PizzaBuilder;
}());
var Pizza = /** @class */ (function () {
    function Pizza(ingredient1, ingredient2, ingredient3, specialSauce, ingredient4, ingredient5, ingredient6) {
        if (ingredient1 === void 0) { ingredient1 = 'cheese'; }
        if (ingredient2 === void 0) { ingredient2 = 'tomato'; }
        if (ingredient3 === void 0) { ingredient3 = 'pepperoni'; }
        if (specialSauce === void 0) { specialSauce = 'special sauce'; }
        this.ingredient1 = ingredient1;
        this.ingredient2 = ingredient2;
        this.ingredient3 = ingredient3;
        this.specialSauce = specialSauce;
        this.ingredient4 = ingredient4;
        this.ingredient5 = ingredient5;
        this.ingredient6 = ingredient6;
    }
    return Pizza;
}());
var pizzaMaker = new PizzaBuilder();
var pizza = pizzaMaker.changeIngredient3('chicken')
    .addIngredient4('mushrooms')
    .addIngredient5('pepper')
    .addIngredient6('meat')
    .changeSpecialSauce('super special sauce')
    .build();
console.log(pizza);
