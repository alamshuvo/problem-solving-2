// Your task is to calculate the `total budget` required to buy electronics:

//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk

// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.
function calculateElectronicsBudget(laptop,tablets,mobile) {
    if (isNaN((laptop)||isNaN(tablets)||isNaN(mobile))||(laptop<0||tablets<0||mobile<0)) {
        return "please input valid number"
    }
    const laptopPrice=35000;
    const tabletPrice=15000;
    const mobilePrice=20000;
    const calculateTotalLaptopPrice=laptopPrice*laptop;
    const calculateTotalTabletPrice=tabletPrice*tablets;
    const calculateTotalMobilePrice=mobilePrice*mobile;
    const total=calculateTotalLaptopPrice+calculateTotalMobilePrice+calculateTotalTabletPrice;
    return total;    
}
console.log(calculateElectronicsBudget(1,1,1));