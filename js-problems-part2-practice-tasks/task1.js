// Find the lowest number in the array below.
// <br>
const heights2 = [167, 190, 120, 165, 137];
function calcLowestNumber(number) {
    let lowesNumber=number[0];
    if (!Array.isArray(number)) {
        return "please input valid array"
    }
    for (const num of number) {
        if (num<lowesNumber) {
            lowesNumber=num;
        }
    }
    return lowesNumber;
}

console.log(calcLowestNumber(heights2));