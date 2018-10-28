const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));


function solveQuadrEq(a, b, c) {
    const d = diskr(a, b, c);
    if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        alert('x1=' + x1 + 'x2 =' + x2);
    } else if (d == 0) {
        const x1 = (-b) / (2 * a);
        alert('x =' + x1);
    } else if (d < 0) {
        alert('No solution');
    }
}
 
    


function diskr(a, b, c) {
    return (b * b) - (4 * a * c);
}

alert(solveQuadrEq(a, b, c));

