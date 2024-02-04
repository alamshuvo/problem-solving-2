//**find the chepest number */
// const mobile=[1200,5000,3000,50000,30000,100000];
// function checkCheepMobilePrice(prices) {
//     let minNum=prices[0];
//     for (const price of prices) {
//         if (price<minNum) {
//             minNum=price
//         }
        
//     }
//     return minNum
// }
// console.log(checkCheepMobilePrice(mobile));
//**find max price an array */
// const mobile=[1200,5000,3000,50000,30000,100000];
// function checkMaxMobilePrice(prices) {
//     let maxNum=prices[0];
//     for (const price of prices) {
//         if (price>maxNum) {
//             maxNum=price
//         }
        
//     }
//     return maxNum
// }
// console.log(checkMaxMobilePrice(mobile));


//**find max number or price an object */
    const mobile=[
    {name:"samsung",price:20000,color:"black"},
    {name:"oppo",price:50000,color:"gray"},
    {name:"xamio",price:25000,color:"pink"},
    {name:"symphony",price:60000,color:"ash"},
    {name:"apple",price:120000,color:"offwhite"},
    {name:"nokia",price:33000,color:"red"},
];
function checkMobilePrice(prices) {
    let minPrice=prices[0];
    for (const price of prices) {
        if (price.price<minPrice.price) {
            minPrice=price;
        }
        
    }
    return minPrice;
}
console.log(checkMobilePrice(mobile));

// ** object er sathe compare korar jonno ei rokom vabe ber kora jai price e price e compare korar jono
