// Meets Expectations

let groceryList = [new GroceryItem("Apples", 0.50, 5), new GroceryItem("Avocados", 2.00, 2),
  new GroceryItem("Beers", 2.50, 4), new GroceryItem("Kale", 2.00) ];


function summary(groceryList) {
  let total = 0;
  let finalList = `Dear Bestie,\n\nI bought you:\n\n`;
  groceryList.forEach((item) => {
    finalList += `${item.quantity} - ${item.name} $` + (item.quantity * item.price).toFixed(2) + `\n`;
    total += item.quantity * item.price;
  });
  finalList += `\nYou owe me $` + total.toFixed(2) + '.';
  return finalList;
}

console.log(summary(groceryList));

// Exceeds Expectations
let inventoryNearMe = {
  banana: 2,
  coffee: 2,
  kale: 5,
  chocolateBar: 5,
  apple: 10,
  potato: 11,
  tomato: 1,
  beer: 3,
  avocado: 1,
  milk: 5
};

let inventoryNearBestie = {
  banana: 2,
  coffee: 2,
  kale: 5,
  chocolateBar: 5,
  apple: 10,
  potato: 11,
  tomato: 1,
  beer: 6,
  avocado: 10,
  milk: 5
};
