
expression = ""
answer = 0

function appendThing(s){
    expression += s
    document.getElementById("expression").innerHTML = expression
}

function clearExp(){
    expression = ""
    answer = 0
    document.getElementById("expression").innerHTML = expression
    document.getElementById("ans").innerHTML = ''
}

function evaluateAns(){
    answer = eval(expression)
    console.log(answer)
    document.getElementById("ans").innerHTML = answer
}