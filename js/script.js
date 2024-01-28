function convertir() {
    var valores = parseInt(document.getElementById('valor').value);
    var resultado = 0;
    var dolar = 3939;
    var euro = 4279;

    if (document.getElementById("uno").checked) {
        resultado = valores / dolar;
        alert("El cambio de pesos a dólares es: $" + resultado.toFixed(2));
    } else if (document.getElementById("dos").checked) {
        resultado = valores / euro;
        alert("El cambio de pesos a Euros es: " + resultado.toFixed(2));
    } else {
        alert("Tienes que completar todos los requerimientos");
    }
}
