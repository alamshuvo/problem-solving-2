//akta number er cube ber koro and validation daw.
function cubeNumber(number) {
    if (typeof number !=="number") {
        return "number daw string allowed na"
    }
    const cube=Math.pow(number,3)
    return cube;
}
console.log(cubeNumber(5));