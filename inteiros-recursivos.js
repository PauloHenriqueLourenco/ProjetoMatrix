function isValid(n) {
    return typeof parseInt(n) === "number" && n >= 0;
}

function somarInteiros(n) {

    function somar(n){
        return n === 0 ? 0 : somar(n-1) + n;
    }

    if(isValid(n)){
        return somar(parseInt(n));
    }
    else {
        return undefined;
    }   
}

function somarImpares(n) {

    function somar(n){
        return n === 0 ? 0 : (2*n-1) + somar(n-1);
    }

    if (isValid(n)) {
        return somar(parseInt(n));
    }
    else {
        return undefined;
    }
}

function multiplicarInteiros(n) {

    function multiplicar(n){
        return n === 0 ? 0 : n === 1 ? 1 : multiplicar(n-1) * n;
    }

    if(isValid(n)){
        return multiplicar(parseInt(n));
    }
    else {
        return undefined;
    }
}

console.log(somarInteiros(100))
console.log(somarImpares(3))
console.log(multiplicarInteiros(4))