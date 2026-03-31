function dividir() {
    let x = parseFloat(prompt("Digite o primeiro número:"));
    let y = parseFloat(prompt("Digite o segundo número:"));

    if (y == 0) {
        console.log("Não pode dividir por zero");
    } else {
        console.log("Divisão: " + (x / y));
    }
}