const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));


function solveQuadrEq(a, b, c) {
    const d = diskr(a, b, c);
    if (d > 0) {
        const x1 = (-b+Math.sqrt(d))/(2*a);
        const x2 = (-b-Math.sqrt(d))/(2*a);
        return 
    }
    }
    
    


function diskr(a, b, c) {
    return (b * b) - (4 * a * c);
}

alert(diskr(a, b, c));

