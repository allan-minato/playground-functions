// Desafio 1

function compareTrue(param1, param2) {
  if(param1  && param2){
     return true
  }else{
    return false
  }
}


// Desafio 2
function calcArea(base, altura) {
 return (base * altura) / 2
}


// Desafio 3
function splitSentence(string) {
  return string.split(' ')
}

// Desafio 4

function concatName(array) {
 return array[array.length-1] +', '+ array[0];

}


// Desafio 5

function footballPoints(wins, ties) {
   
return wins * 3 + ties * 1
    
}

// Desafio 6

function highestCount(numeros) {
  let occurrence = 0;
  let highestNumber = numeros[0];

  for(let numero of numeros){
    if(numero > highestNumber){
      highestNumber = numero;
      occurrence = 1; 
    }else if(numero == highestNumber){
      occurrence += 1;
    }
  }
  
  return occurrence;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catOneDistance = mouse - cat1;
  let catTwoDistance = mouse - cat2;

  catOneDistance = Math.sign(catOneDistance) === -1 || Math.sign(catOneDistance) === -0 ? catOneDistance * -1 : catOneDistance;
  catTwoDistance = Math.sign(catTwoDistance) === -1 || Math.sign(catTwoDistance) === -0 ? catTwoDistance * -1 : catTwoDistance;

  if(mouse === catOneDistance && mouse === catTwoDistance) {
    return 'os gatos trombam e o rato foge';
  } 
  
  if (catOneDistance > catTwoDistance) {
    return 'cat2';
  }

  return 'cat1';
}

// Desafio 8
function fizzBuzz(arrNumbers) {
  let arrReturn = [];

  document.getElementById()

  for (let index = 0; index < arrNumbers.length; index++) {

    if((arrNumbers[index] % 3) === 0 && (arrNumbers[index] % 5) === 0) {
      arrReturn.push('fizzBuzz');
      continue;
    }

    if((arrNumbers[index] % 3) === 0) {
      arrReturn.push('fizz');
      continue;
    } 
    
    if((arrNumbers[index] % 5) === 0) {
      arrReturn.push('buzz');
      continue;
    }

    arrReturn.push('bug!');
  }

  return arrReturn;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
