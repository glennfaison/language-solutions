let global = {};
global.digitsAndTeens = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
  "seventeen", "eighteen", "nineteen", "twenty",
];
global.tens = [
  "", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy",
  "eighty", "ninety",
];
global.tenSquared = ["hundred"];
global.logsOfAThousand = [
  "", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion",
  "sexillion", "septillion", "octillion", "nonillion", "decillion", "undecillion",
  "duodecillion",
];


function toInteger(float) {
  return float - (float % 1);
}

function separateNumberIntoHundredsList(number) {
  let hundredsList = [];
  number = toInteger(number);
  while(number > 0) {
    hundredsList.push(toInteger(number % 1000));
    number /= 1000;
    number = toInteger(number);
  }
  if(hundredsList.length === 0) { hundredsList.push(0); }
  return hundredsList.reverse();
}

function spellTwoDigits(number) {
  number = toInteger(number);
  if(number < 21) { return global.digitsAndTeens[number]; }

  let zero = toInteger(number % 10);
  let ten = toInteger(number / 10);
  let spelling = global.tens[ten];
  if(zero === 0) {return spelling;}
  return spelling + " " + global.digitsAndTeens[zero];
}

function spellThreeDigits(number) {
  number = toInteger(number);
  if(number < 100) { return spellTwoDigits(number); }

  let hundred = toInteger(number / 100);
  let ten = toInteger(number % 100);

  let spelling = global.digitsAndTeens[hundred] + " " + global.tenSquared;
  if(ten === 0) {return spelling;}
  return spelling + " and " + spellTwoDigits(ten);
}

export default function spellNumber(number) {
  let hundredsList = separateNumberIntoHundredsList(number);
  let logOneThousand = hundredsList.length - 1;
  let separator = " ";

  let spelling = spellThreeDigits(hundredsList[0])
    + " " + global.logsOfAThousand[logOneThousand];
  logOneThousand--;
  for(let i = 1; i < hundredsList.length; i++) {
    let tempSpelling = (hundredsList[i] === 0)?
      "": separator
      + spellThreeDigits(hundredsList[i]) + " "
      + global.logsOfAThousand[logOneThousand];
    logOneThousand--;
    spelling += tempSpelling;
  }
  return spelling;
};