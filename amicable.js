function inputnum(form) {
    var TestVar = form.inputbox.value;
    alert ("You typed: " + TestVar);
}

function amicable(x) {
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

function factors(x) {
    for(let i = 1; i <= x; i++) {
        if(num % i == 0) {
            console.log(i);
        }
    }
}