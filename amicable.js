function inputnum() {
    var numberone = document.getElementById.elements("numone").value;
    var numbertwo = document.getElementById.elements("numtwo").value;

    var sumone = 0;
    var sumtwo = 0;

    var arraynumone = [];
    var arraynumtwo = [];

    sumone = sum(arraynumone, sumone, numberone);
    sumtwo = sum(arraynumtwo, sumtwo, numbertwo);

    amicable (sumone, sumtwo, numberone, numbertwo, arraynumone, arraynumtwo);

}

function amicable (sumone, sumtwo, numberone, numbertwo, arraynumone, arraynumtwo) {
    if ((sumone == numbertwo) && (sumtwo == numberone)) {
        document.getElementById("result").innerHTML = "The numbers:  " + numberone + " and " + numbertwo  + " are amicable";
    } else {
        document.getElementById("result").innerHTML = "The numbers:  " + numberone + " and " + numbertwo + " are amicable";
    }
    document.getElementById("factors").innerHTML = "The factors of " + numberone + " are " + arraynumone + ".\n The factors of " + numbertwo + " are " + arraynumtwo + ".";
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
        sum += factors(array, i, num);
    }
    return sum;
}