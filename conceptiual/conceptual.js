// jekonono ekta object er value akta name r ekta age ,
another={name:"hj",age:5}
function validationForObject(obj) {
    if (obj["name"] && obj["age"]) {
         if (typeof obj["name"] !=="string" || typeof obj["age"] !=="number") {
            return "bhai object tikh ache tobe property er value change koren "
        }
        else{
            return "okey"
        } 
    }
    else{
        return "eta object na please valid object daw jar age and  name value ache"
    }
}
console.log(validationForObject(another));