function calculate() {
    // Code to calculate
    var math2calc = document.getElementById("calcbox").value;
    var f = eval(math2calc);
    document.getElementById("calcbox").value = f;
}

function test() {
    window.alert("yeah cuck i'm working")
}

function push(argument1) {
    if (!argument1) return;
    
    document.getElementById("calcbox").value = document.getElementById("calcbox").value + argument1;
}

function clearx() {
    document.getElementById("calcbox").value = "";
}