function execute() {
    let input = document.getElementById('qNo').value;
    let result = window['aoc_2k19_' + input]();
    document.getElementById('result').innerHTML = `<span style='color: green;'>${result}</span>`
}

function clearResult() {
    document.getElementById('result').innerHTML = '';
}

function showQuestion(question) {
    document.getElementById('question').innerText = question;
}