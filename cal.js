function displayNum(num){
    result.value+=num
}
function evaluateExpr(){
    result.value=eval(result.value)
}
function allClear(){
    result.value=""
}
function backSpace(){
    result.value=result.value.slice(0,-1)
}