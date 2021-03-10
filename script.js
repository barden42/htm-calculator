
const button = document.getElementById("calculate");

button.addEventListener("click", function(event) {
    const firstValue = parseInt(document.getElementById("firstValue").value);
    const secondValue = parseInt(document.getElementById("secondValue").value);
    const operator = document.getElementById("operator").value;

    let res = 0;
    switch(operator) {
        case '+':
            res = firstValue + secondValue;
            break;
        case '-':
            res = firstValue - secondValue;
            break;
        case "*":
            res = firstValue * secondValue;
            break;
        case "/":
            res = firstValue / secondValue;
            break;
        case "%":
            res = firstValue % secondValue;
            break;
        default:
            res = "Unknow operator";
            break;
    }

    document.getElementById('result').innerHTML = "<h2>" + res + "</h2>";
});

const reset = document.getElementById('reset');

reset.addEventListener("click", function() {
    document.getElementById('result').innerHTML = "";
    document.getElementById("firstValue").value = null;
    document.getElementById("secondValue").value = "";
});