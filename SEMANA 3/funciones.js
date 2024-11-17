
function calcular() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const operacion = document.getElementById("operacion").value;
    const resultadoElement = document.getElementById("resultado");

    let resultado = 0;

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoElement.textContent = "Por favor, ingresa números válidos.";
        resultadoElement.style.color = 'red';
        return;
    }

    switch (operacion) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 === 0) {
                resultadoElement.textContent = "Error: División por cero.";
                resultadoElement.style.color = 'red';
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            resultadoElement.textContent = "Operación no válida. Usa +, -, * o /.";
            resultadoElement.style.color = 'red';
            return;
    }

    resultadoElement.textContent = resultado;
    resultadoElement.style.color = '#007BFF';
}
