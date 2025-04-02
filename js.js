function converter() {
    let valor = document.getElementById("valor").value;
    let moeda = document.getElementById("moeda").value;
    let resultado = document.getElementById("resultado");

    let cotacaoReal = 0.0040;
    let cotacaoDolar = 0.00076;
    let cotacaoEuro = 0.00070;

    let convertido = 0;

    if (moeda == "BRL") {
        convertido = valor * cotacaoReal;
    } else if (moeda == "USD") {
        convertido = valor * cotacaoDolar;
    } else if (moeda == "EUR") {
        convertido = valor * cotacaoEuro;
    }

    resultado.innerText = "Valor convertido: " + convertido.toFixed(2);
}
