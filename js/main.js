var num1 = 2;
var num2 = 5;

function wieksza(p1, p2) {
    var w = p1;
    if (w < p2) {
        w = p2;
    }
    return w;
}

console.log(wieksza(num1, num2));
