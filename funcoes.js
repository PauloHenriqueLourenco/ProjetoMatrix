function isValid(n){

  return typeof parseInt(n) === "number" && n >= 0;
}

function somarInteiros(n){
  var sum = 0;

  if(isValid(n)){
    n = parseInt(n);
    for(i = 1; i <= n; i++){
      sum += i;
    }
    return sum;
  } else {
    return undefined;
  }
}

function somarImpares(n){
  var sum = 0;
  var odd = 1;
  if(isValid(n)){
    n = parseInt(n);
    for(i = 0; i < n; i++,odd+=2){
      sum += odd;
    }
    return sum;
  }      
  else{
    return undefined;
  }
}

function multiplicarInteiros(n){
  if(n === 0) return 0;
  var fat = 1;
  if(isValid(n)){
    n = parseInt(n);
    for(i = 2; i <= n; i++){
      fat *= i;
    }
    return fat;
  }
  else {
    return undefined;
  }
}

console.log(somarInteiros(100))
console.log(somarImpares(3))
console.log(multiplicarInteiros(4))