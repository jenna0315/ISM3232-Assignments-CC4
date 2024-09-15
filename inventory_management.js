//Task 1 Initialize inventory with product objects
const inventory = [
    {name:"Laptop", price:1000, quantity:22,lowStockLevel:7},
    {name:"IPhone 15",price:1200, quantity:25,lowStockLevel:6},
    {name:"Tablet", price:600, quantity:3,lowStockLevel:4},
    {name:"Speaker", price:500, quantity:30,lowStockLevel:5},
    {name:"Apple Watch", price:700, quantity:2,lowStockLevel:5}
];

//Task 2 Create displayProductDetails function
console.log(`Initial Inventory Summary:`)//better organization of console display
function displayProductDetails (inventory){
    return inventory.forEach((item)=>
{console.log(`${item.name} 
Price:$${item.price} 
${item.quantity} units remaining
Minimum Stock: ${item.lowStockLevel}`)}
)};
let productDetails = displayProductDetails(inventory);//used to display product details in a nice format

console.log(`Initial Test of Stock Levels:`)//better organization of console display
function determineStock (inventory) {
{let stockStatus = inventory.quantity <= inventory.lowStockLevel ? `Low Stock` : `In Stock`;
   return `The ${inventory.name} is ${stockStatus}.`}};//function to reflect stock levels

console.log(`${determineStock(inventory[0])}`);
console.log(`${determineStock(inventory[1])}`);
console.log(`${determineStock(inventory[2])}`);
console.log(`${determineStock(inventory[3])}`);
console.log(`${determineStock(inventory[4])}`);

//Task 3 Create updateStock function
console.log(`Updated Stock After Sale:`)//better organization of console display
function updateStock(inventory,unitsSold){
   let newStock = inventory.quantity -= unitsSold
    return `There are now ${newStock} ${inventory.name}s remaining!`
};//update the stock after items are sold
console.log(updateStock(inventory[0],20));
console.log(`Product Availability Warning! ${determineStock(inventory[0])}`);//reflect stock status after update

//Task 4 Create checkLowStock function
console.log(`Check Stock Levels After Sale of Goods:`)
function checkLowStock(inventory) {
    for (let lowStockLevel of inventory)
    {if(inventory.quantity <= inventory.lowStockLevel) {
      return`Everything is In Stock`}
    }
return `${determineStock(inventory[0])}
${determineStock(inventory[1])}
${determineStock(inventory[2])}
${determineStock(inventory[3])}
${determineStock(inventory[4])}`
}
let stockLevels = checkLowStock(inventory)
console.log(stockLevels)

//Task 5 Create calculateInventoryValue function
console.log(`Total Value of All Inventory:`)
function calculateInventoryValue (){
    return inventory.reduce((totalValue,product) => 
        {return totalValue + (product.price * product.quantity)},0);
};
const inventoryTotalValue = calculateInventoryValue(inventory)
console.log(`The Total Inventory Value is $${inventoryTotalValue}`);

//Task 6 Create processSale function
console.log(`Inventory After Recent Sale:`)
function processSale (product,unitsSold)
{var sale = inventory.find(({name}) => name===product)
if (inventory.includes(product)){
return `Product Not Found In Inventory`;
}else {
    return updateStock(sale,unitsSold)
}
}
console.log(processSale("IPhone 15",22))
console.log(`Inventory Summary After Updates:`);
console.log(displayProductDetails(inventory));