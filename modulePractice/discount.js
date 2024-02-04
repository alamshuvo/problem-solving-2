//**multilayr discoun price calculation */
//upto-----100---100tk
//more than 100--200----90tk
//more than 200----70tk;
// function discountPrice(quantaty) {
//     if (quantaty<=100) {
//         const price=quantaty*100;
//         return price;
//     }
//     else if(quantaty<=200){
//         const price=quantaty*90;
//         return price;
//     }
//     else if(quantaty>200){
//         const price=quantaty*70;
//         return price;
//     }
// }
// console.log(discountPrice(220));

//**layar discount */

function layarDiscount(products) {
const firstHunded=100;
const secondHunded=90;
const remaining1=70;
if (products<=100) {
    const price=products*firstHunded;
    return price
}
else if (products<=200) {
    const firstPrice=100*firstHunded;
    const remainig=(products-100)*secondHunded;
    const total=firstPrice+remainig;
    return total;
}
else{
    const firstPrice=100*firstHunded;
    const remainig=secondHunded*100;
    const anotherRemaining=(products-200)*remaining1;
    const total=firstPrice+remainig+anotherRemaining;
    return total;
}  
}
console.log(layarDiscount(300));