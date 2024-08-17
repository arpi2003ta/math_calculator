function calculate() {
    const operation = document.getElementById('operation').value;
    const firstNumber = parseFloat(document.getElementById('first-number').value);
    const secondNumber = parseFloat(document.getElementById('second-number').value);
    let result;

    switch (operation) {
        case 'addition':
            result = firstNumber + secondNumber;
            break;
        case 'subtraction':
            result = firstNumber - secondNumber;
            break;
        case 'multiplication':
            result = firstNumber * secondNumber;
            break;
        case 'division':
            result = firstNumber / secondNumber;
            break;
        case 'trigonometric':
            const angle = firstNumber;
            result = `
                Sine: ${Math.sin(angle * Math.PI / 180)}<br>
                Cosine: ${Math.cos(angle * Math.PI / 180)}<br>
                Tangent: ${Math.tan(angle * Math.PI / 180)}
            `;
            break;
        case 'math_functions':
            result = `
                e^x: ${Math.exp(firstNumber)}<br>
                ln(x): ${Math.log(firstNumber)}<br>
                sqrt(x): ${Math.sqrt(firstNumber)}<br>
                x^y: ${Math.pow(firstNumber, secondNumber)}
            `;
            break;
        case 'quadratic':
            const a = firstNumber;
            const b = secondNumber;
            const c = parseFloat(prompt("Enter the coefficient of c:"));
            const discriminant = b * b - 4 * a * c;

            if (discriminant < 0) {
                result = 'Roots are Complex Numbers.';
            } else {
                const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                result = `Roots of equation are: ${root1}, ${root2}`;
            }
            break;
        default:
            result = 'Invalid Option';
            break;
    }

    document.getElementById('result').innerHTML = result;
}
