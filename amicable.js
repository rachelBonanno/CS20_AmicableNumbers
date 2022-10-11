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
    for (let i = 1; i <= x; i++) {
        if (num % i == 0) {
            console.log(i);
        }
    }
}

function theMessage(input, message, type) {
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    input.className = type ? "success" : "error";
    return type;
}

function showError(input, message) {
    return theMessage(input, message, false);
}

function showSuccess(input) {
    return theMessage(input, "", true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message);
    }
    return showSuccess(input);
}
