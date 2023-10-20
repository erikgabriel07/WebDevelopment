class Calculadora {

    somar(v1, v2) {
        return v1 + v2
    }

    subtrair(v1, v2) {
        return v1 - v2
    }

    multiplicar(v1, v2) {
        return v1 * v2
    }

    dividir(v1, v2) {
        return (v1 / v2).toFixed(2)
    }
}

const calcular = new Calculadora()

const sum = document.querySelector('button#sum')
const sub = document.querySelector('button#sub')
const mul = document.querySelector('button#mul')
const div = document.querySelector('button#div')
const res = document.querySelector('div#res')

sum.addEventListener('click', function () {
    const valor1 = parseInt(document.querySelector('input#valor1').value)
    const valor2 = parseInt(document.querySelector('input#valor2').value)
    if (!(isNaN(valor1)) && !(isNaN(valor2))) {
        res.innerHTML = 'SOMA:<br>' + (calcular.somar(valor1, valor2))
    }

})

sub.addEventListener('click', function () {
    const valor1 = parseInt(document.querySelector('input#valor1').value)
    const valor2 = parseInt(document.querySelector('input#valor2').value)
    if (!(isNaN(valor1)) && !(isNaN(valor2))) {
        res.innerHTML = 'DIFERENÇA:<br>' + calcular.subtrair(valor1, valor2)
    }

})

mul.addEventListener('click', function () {
    const valor1 = parseInt(document.querySelector('input#valor1').value)
    const valor2 = parseInt(document.querySelector('input#valor2').value)
    if (!(isNaN(valor1)) && !(isNaN(valor2))) {
        res.innerHTML = 'PRODUTO:<br>' + calcular.multiplicar(valor1, valor2)
    }

})

div.addEventListener('click', function () {
    const valor1 = parseInt(document.querySelector('input#valor1').value)
    const valor2 = parseInt(document.querySelector('input#valor2').value)
    if (!(isNaN(valor1)) && !(isNaN(valor2))) {
        res.innerHTML = 'QUOCIENTE:<br>' + calcular.dividir(valor1, valor2)
    }

})