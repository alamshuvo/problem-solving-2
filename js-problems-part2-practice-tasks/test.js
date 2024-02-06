// prove koren j moon er kono bf nai ,jodi moon single hoi tahole se hostel e taakhbe ,r jodi byea hoye double hoye jai tahole se jamaie er sathe sosur bari takbe.r jodi moon single takhe se ctg asbe.
function moonErOt(moon) {
    if (!isNaN(moon)) {
        return `please input valid string `
    }
    else{
        if (moon.includes("single")) {
            return `Chittagong cole aso ,Asba bolle nyea asbo.`
        }
        else if(moon.includes("double")){
            return `jamai nyea sosur barite sukhe takho hostel e ki `
        }
        else{
            return `single r double er majkhane to kono kisu nai ,tahole tumi ki clear kore bolo .`
        }
    }
    
}
console.log(moonErOt("i am a double"));