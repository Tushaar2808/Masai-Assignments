function multiplyNumbers(a, b) {
    return (function(x, y) {
        return x * y;
    }).apply(null, [a, b]);
}

console.log(multiplyNumbers(7, 5)); 
