//**calculate the total cost of a shopping cart */
// const priceOfProduct=[
//     {name:"shampu",price:500,quantaty:5},
//     {name:"ciruni",price:1500,quantaty:4},
//     {name:"shirt",price:5500,quantaty:6},
//     {name:"pant",price:9500,quantaty:2},

// ]
// function calculateTotalCostCart(products) {
//     let sum=0;
// for (const product of products) {
//     sum+=product.price
// }
//     return sum
// }
// console.log(calculateTotalCostCart(priceOfProduct));
const priceOfProduct=[
    {name:"shampu",price:500,quantaty:5},
    {name:"ciruni",price:1500,quantaty:4},
    {name:"shirt",price:5500,quantaty:6},
    {name:"pant",price:9500,quantaty:2},

]
function calculateTotalCostCart(products) {
    let sum=0;
for (const product of products) {
    const thisProductCost=product.quantaty*product.price;
    sum=sum+thisProductCost;
}
return sum
}
console.log(calculateTotalCostCart(priceOfProduct));