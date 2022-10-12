function inputnum() {
    var numberone = document.getElementById.elements("numone").value;
    var numbertwo = document.getElementById.elements("numtwo").value;

    var sumone = 0;
    var sumtwo = 0;

    var arraynumone = [];
    var arraynumtwo = [];

    factorsSum(arraynumone, numone);
    factorsSum(arraynumtwo, numtwo);
    document.getElementById("result1").innerHTML = "The numbers:  " + numberone + " and " + numbertwo  + " are amicable";
    document.getElementById("result2").innerHTML = "The numbers:  " + numberone + " and " + numbertwo + " are amicable";


}

function amicable (x) {
    let result = 0;
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            if (i == (x / i)) {
                result += i;
            }
        } else {
            result += (i + x / i);
        }
    }
    return (result + 1);
}

function factors (array, fact, num) {
    if (num % fact == 0) {
            array.push(fact);
            return fact;
    }
    return 0;
}

function sum (array, sum, num) {
    for (let i = 1; i <= num; i++) {

    }
}