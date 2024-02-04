// **who is the tallest find the max number in array. */
const tallest=[75,65,98,52,36,33,25,56,45,21,55];
function findTheTallest(tall) {
    let maxNum=tall[0];
    for (const num of tall) {
        // console.log(num);
        if (num>maxNum) {
            
            maxNum=num;
        }
    }
    
    return ` this is the tallest size ${maxNum}.`;
    
}
console.log(findTheTallest(tallest));

//**who is the  smallest find the min number in array */
const smallest=[75,65,98,52,36,33,25,56,45,21,55];
function findTheSmallest(small) {
    let minNum=small[0];
    for (const num of small) {
        // console.log(num);
        if (num<minNum) {
            minNum=num;
        }
    }
    return ` this is the smallest size ${minNum}.`;
    
}
console.log(findTheSmallest(smallest));