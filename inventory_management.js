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
