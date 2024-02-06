function picnicBuduget(student) {
    const first100Jon=5000;
    const second100jon=4000;
    const remaining=3000;
     
    if(typeof student !=="number" || student<0){
        return "are beda number de ."
    }
    else{
        if (student<=100) {
            const fare=first100Jon*student;
            return fare;
        }
        else if(student<=200){
            const fare =first100Jon*100;
            const remainingFare=fare+(student-100)*second100jon;
            return remainingFare;
        }
        else if(student>200){
            const fare =first100Jon * 100;
            const second=fare+(100 * second100jon);
            const remaning=second+(student-200)*remaining;
            return remaning;
        }
    }
}
console.log(picnicBuduget("hjyhfjh"));