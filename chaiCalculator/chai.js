function calculateChaiIngredients() {
    let input =prompt("Hello, how many cups of chai would you like to make today");
    let numberofCups = Number(input);

if(numberofCups <=0) {
    console.log("please enter a valid number of cups!");
}

const ingredients = {
    water: 200, //ml
    milk: 50, //ml
    tealeaves: 1, //tablespoons
    sugar: 2, //teaspoons

};
let totalIngredients = {
    water: ingredients.water * numberofCups,
    milk: ingredients.milk * numberofCups,
    tealeaves: ingredients.tealeaves * numberofCups,
    sugar: ingredients.sugar * numberofCups,
};

console.log(`To make ${numberofCups} cups of chai you will need:`);
console.log(`${totalIngredients.water} ml of water`);
console.log(`${totalIngredients.milk} ml of milk`);
console.log(`${totalIngredients.tealeaves} tablespoons of tealeaves`);
console.log(`${totalIngredients.sugar} teaspoons of sugar`);
console.log("Enjoy making your tea! karibu tena!")
}

calculateChaiIngredients();




