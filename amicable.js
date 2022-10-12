function inputnum(form) {
    const form = document.getElementById('submit');
    const numone = form.elements['numone'];
    const numtwo = form.elements['numtwo'];
    let numberone = numone.value;
    let numbertwo = numtwo.value;
    form.addEventListener('submit', (event) => {
        // handle the form data
    });
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
    const fact = new Array();
    const fact = [];
    let w = 0;
    for (let i = 1; i <= x; i++) {
        if (num % i == 0) {
            fact[w] = i;
            w++;
        }
    }
}