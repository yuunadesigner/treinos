function appendToDisplay(value) {
    document.getElementById('display').value += value
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    let display = document.getElementById('display')
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Erro'
    }
}