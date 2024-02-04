function add(num1,num2) {
    return num1+num2;
}
function substarct(num1,num2) {
    return num1-num2;
}
function multification(num1,num2) {
    return num1*num2;
}
function divided(num1,num2) {
    return num1/num2;
}
function calculator(a,b,operation) {
    if (operation==="add") {
        const result=add(a,b);
        return result;
    }
    else if (operation==="substarct") {
        const result=substarct(a,b);
        return result;
    }
    else if (operation==="multification") {
        const result=multification(a,b);
        return result;
    }
    else if (operation==="divided") {
        const result=divided(a,b);
        return result;
    }
    else{
        return "only add substract multification devide allowed"
    }
}
console.log(calculator(5,7,"substarct"));