

const display = () => {
    document.querySelector(".display-box").value = operand_1;
    if (operation !== '') {
        document.querySelector(".display-box1").value = `${operand_2} ${operation}`;
    } else {
        document.querySelector(".display-box1").value = '';
    }
}
const readDisplayBox1 = () => {
    return document.querySelector(".display-box1").value
}

const readDisplay = () => {
    return document.querySelector(".display-box").value
}

const compute = () => {

    if ((operand_1 === '' || operand_2 === '') && operation !== '√') return
    if (operand_1[0] === '.') operand_1 = 0 + operand_1;
    if (operand_1[operand_1.length - 1] === '.') operand_1 = operand_1.toString().slice(-1);
    if (operand_2[0] === '.') operand_2 = 0 + operand_2;
    if (operand_2[operand_1.length - 1] === '.') operand_2 = operand_2.toString().slice(-1);


    operand_1 = parseFloat(operand_1)
    operand_2 = parseFloat(operand_2)
    switch (operation) {
        case '√':
            computation = Math.sqrt(operand_1)
            console.log(computation)
            break
        case '+':
            computation = operand_1 + operand_2
            break
        case '-':
            computation = operand_1 - operand_2
            break
        case '*':
            computation = operand_1 * operand_2
            break
        case '/':
            if (operand_2 === 0) {
                computation = 'Cannot divide by zero'
            } else {
                computation = operand_1 / operand_2
            }
            break
        default:
            return
    }

    if (computation.toString().length > 10) computation = computation.toString().slice(0, 10);
    operand_1 = computation;
    operand_2 = '';
    operation = '';

}

const clearDisplay = () => {
    operand_1 = '';
    operand_2 = '';
    operation = '';
    display()
}


const point = document.querySelector(".buttonpoint");
const clear = document.querySelector(".buttonC");
const delet = document.querySelector(".buttonCE");
const rootSquare = document.querySelector(".button_root")
const equal = document.querySelector(".button_equal");
const button_num = document.querySelectorAll(".button_number")
const operationButtons = document.querySelectorAll(".operation_button")


delet.addEventListener("click", function () {
    operand_1 = operand_1.slice(0, -1)
    display()
})


point.addEventListener("click", function () {
    if (operand_1.toString().includes('.')) return
    operand_1 += "."
    display()
})


clear.addEventListener("click", function () {
    clearDisplay();
})


rootSquare.addEventListener("click", function () {

    if (operand_1 === '' || operand_1 < 0 || operation !== '') return
    operation = '√';
    compute()
    display()
})


equal.addEventListener("click", function () {
    if (operation === '√') return
    compute()
    display()
})


button_num.forEach(button => {
    button.addEventListener('click', function () {

        if (operand_1.length < 10) operand_1 += button.value;

        display();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', function () {

        if (operand_1 === '') return
        if (operand_2 !== '') {
            compute()
        }
        operation = button.value;
        operand_2 = operand_1
        operand_1 = ''
        display();
    });
});

clearDisplay();