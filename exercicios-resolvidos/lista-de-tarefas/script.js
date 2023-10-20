const adicionar = document.querySelector('button#add')
const remover = document.querySelector('button#rem')
const lista = document.querySelector('div#lista')
let array = []

adicionar.addEventListener('click', function () {
    const tarefa = document.querySelector('input#my-task')
    if (tarefa.value.length > 0) {
        array.push(tarefa.value)
        lista.innerHTML += '<div>- ' + array[array.lastIndexOf(tarefa.value)] + '</div>'
    }
})

remover.addEventListener('click', function () {
    const tarefa = document.querySelector('input#my-task')
    if (tarefa.value.length > 0 && tarefa.value == array[array.lastIndexOf(tarefa.value)]) {
        array.splice(array.indexOf(tarefa.value), 1)
        lista.innerHTML = ''
        for (ele of array) {
            lista.innerHTML += '<div>- ' + ele + '</div>'
        }
    }
})