// Find the friend with the smallest name.
// {/* <br> */}
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function findTheSmallestName(name) {
    let smallest=name[0];
    if (!Array.isArray(name)) {
        return "please input correct array";
    }
    for (const findname of name) {
        if (findname.length<smallest.length) {
            smallest=findname;
        }
    }
    return smallest;
}
console.log(findTheSmallestName(heights2));
