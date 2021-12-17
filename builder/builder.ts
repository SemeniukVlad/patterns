interface PizzaInterface{
    changeIngredient1(ingredient1: string): PizzaBuilder,
    changeIngredient2(ingredient1: string): PizzaBuilder,
    changeIngredient3(ingredient1: string): PizzaBuilder,
    addIngredient4(ingredient4: string): PizzaBuilder,
    addIngredient5(ingredient5: string): PizzaBuilder,
    addIngredient6(ingredient6: string): PizzaBuilder,
    changeSpecialSauce(specialSauce: string): PizzaBuilder,
}

class PizzaBuilder implements PizzaInterface{
    constructor(
        private pizza: Pizza = new Pizza()
    ){}

    changeIngredient1(ingredient1: string): PizzaBuilder{
        this.pizza.ingredient1 = ingredient1;
        return this;
    }

    changeIngredient2(ingredient2: string): PizzaBuilder{
        this.pizza.ingredient2 = ingredient2;
        return this;
    }

    changeIngredient3(ingredient3: string): PizzaBuilder{
        this.pizza.ingredient3 = ingredient3;
        return this;
    }

    addIngredient4(ingredient4: string): PizzaBuilder{
        this.pizza.ingredient4 = ingredient4;
        return this;
    }

    addIngredient5(ingredient5: string): PizzaBuilder{
        this.pizza.ingredient5 = ingredient5;
        return this;
    }

    addIngredient6(ingredient6: string): PizzaBuilder{
        this.pizza.ingredient6 = ingredient6;
        return this;
    }

    changeSpecialSauce(specialSauce: string): PizzaBuilder{
        this.pizza.specialSauce = specialSauce;
        return this;
    }

    build(): PizzaBuilder{
        return this;
    }
}

class Pizza{
    constructor(
        public ingredient1: string = 'cheese',
        public ingredient2: string = 'tomato',
        public ingredient3: string = 'pepperoni',
        public specialSauce: string = 'special sauce',
        public ingredient4?: string,
        public ingredient5?: string,
        public ingredient6?: string,
    ){}
}

const pizzaMaker = new PizzaBuilder();
const pizza = pizzaMaker.changeIngredient3('chicken')
                        .addIngredient4('mushrooms')
                        .addIngredient5('pepper')
                        .addIngredient6('meat')
                        .changeSpecialSauce('super special sauce')
                        .build();

console.log(pizza);