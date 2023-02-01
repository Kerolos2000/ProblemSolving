// main variables
let buttons = document.querySelectorAll("button");
let inputs = document.querySelectorAll("input");
let h2 = document.querySelectorAll(".proplemName h2");

let loadMore = document.querySelector("#loadMore");
let cards = document.querySelectorAll(".card");
let currentCard = 10;
loadMore.onclick = function () {
  for (let i = currentCard; i < currentCard + 10; i++) {
    if(cards[i]){
      cards[i].style.display = "block";
    }
  }
  currentCard += 10;
  if (currentCard >= cards.length) {
    loadMore.style.display = "none";
  }
};

// Problem 1
buttons[1 - 1].onclick = function () {
  h2[1 - 1].innerHTML = `result is ${inputs[1 - 1].value}`;
};

// Problem 2
buttons[2 - 1].onclick = function () {
  h2[2 - 1].innerHTML = `result is 
  ${+inputs[2 - 1].value + +inputs[3 - 1].value}`;
};

// Problem 3
buttons[3 - 1].onclick = function () {
  h2[3 - 1].innerHTML = `result is
    <h3>sum = ${+inputs[4 - 1].value + +inputs[5 - 1].value} </h3>
    <h3>Sub = ${inputs[4 - 1].value - inputs[5 - 1].value} </h3>
    <h3>Mult = ${inputs[4 - 1].value * inputs[5 - 1].value} </h3>
    <h3>Div = ${inputs[4 - 1].value / inputs[5 - 1].value} </h3>
    <h3>Mod = ${inputs[4 - 1].value % inputs[5 - 1].value}</h3>
  `;
};

// Problem 4
buttons[4 - 1].onclick = function () {
  h2[4 - 1].innerHTML = `
  Area = ${+inputs[6 - 1].value + +inputs[7 - 1].value}
  `;
};

// Problem 5
buttons[5 - 1].onclick = function () {
  h2[5 - 1].innerHTML = `result is
  <h3>Diameter = ${2 * inputs[8 - 1].value}</h3>
  <h3>Circumference = ${2 * 3.14 * inputs[8 - 1].value}</h3>
  <h3>Area = ${3.14 * (inputs[8 - 1].value * inputs[8 - 1].value)}</h3>
  `;
};

// Problem 6
buttons[6 - 1].onclick = function () {
  h2[6 - 1].innerHTML = `Fahrenheit = 
  ${(inputs[9 - 1].value * 9) / 5 + 32}`;
};

// Problem 7
buttons[7 - 1].onclick = function () {
  h2[7 - 1].innerHTML = `Celsius = 
  ${((inputs[10 - 1].value - 32) * 5) / 9}`;
};

// Problem 8
buttons[8 - 1].onclick = function () {
  let numberOdDays = inputs[11 - 1].value;
  year = parseInt(numberOdDays / 365);
  weeks = parseInt((numberOdDays - year * 365) / 7);
  days = parseInt(numberOdDays - weeks * 7 - year * 365);
  h2[8 - 1].innerHTML = `${numberOdDays} day = 
  Years ${year} Weeks ${weeks} Days ${days}`;
};

// Problem 9
buttons[9 - 1].onclick = function () {
  h2[9 - 1].innerHTML = `${inputs[12 - 1].value} power ${inputs[13 - 1].value} 
  = 
  ${inputs[12 - 1].value ** inputs[13 - 1].value}`;
};

// Problem 10
buttons[10 - 1].onclick = function () {
  h2[10 - 1].innerHTML = `
  Square root of ${inputs[14 - 1].value} = ${Math.sqrt(inputs[14 - 1].value)}`;
};

// Problem 11
buttons[11 - 1].onclick = function () {
  h2[11 - 1].innerHTML = `
  Angle 3 = ${180 - (+inputs[15 - 1].value + +inputs[16 - 1].value)}°`;
};

// Problem 12
buttons[12 - 1].onclick = function () {
  h2[12 - 1].innerHTML = `
  Area = ${(inputs[17 - 1].value * inputs[18 - 1].value) / 2}
  `;
};

// Problem 13
buttons[13 - 1].onclick = function () {
  h2[13 - 1].innerHTML = `
  Area = ${((Math.sqrt(3) / 4) * inputs[19 - 1].value ** 2).toFixed(2)}
  `;
};

// Problem 14
buttons[14 - 1].onclick = function () {
  sub1 = +inputs[20 - 1].value;
  sub2 = +inputs[21 - 1].value;
  sub3 = +inputs[22 - 1].value;
  sub4 = +inputs[23 - 1].value;
  sub5 = +inputs[24 - 1].value;
  totalMarks = 5 * 100;
  yourMarks = sub1 + sub2 + sub3 + sub4 + sub5;
  h2[14 - 1].innerHTML = `
  <h3>Total marks = ${yourMarks}</h3>
  <h3>Average Marks = ${yourMarks / 5}</h3>
  <h3>Percentage = ${(yourMarks / totalMarks) * 100}%</h3>
  `;
};

// Problem 15
buttons[15 - 1].onclick = function () {
  num1 = +inputs[25 - 1].value;
  num2 = +inputs[26 - 1].value;
  if (num1 > num2) {
    h2[15 - 1].innerHTML = `
      ${num1} is maximum
    `;
  } else {
    h2[15 - 1].innerHTML = `
    ${num2} is maximum
  `;
  }
};

// Problem 16
buttons[16 - 1].onclick = function () {
  num1 = +inputs[27 - 1].value;
  num2 = +inputs[28 - 1].value;
  num3 = +inputs[29 - 1].value;
  let temp;
  if (num1 > num2) {
    temp = num1;
  } else {
    temp = num2;
  }
  if (temp > num3) {
    temp = temp;
  } else {
    temp = num3;
  }
  h2[16 - 1].innerHTML = `
    ${temp} is maximum
  `;
};

// Problem 17
buttons[17 - 1].onclick = function () {
  num = +inputs[30 - 1].value;
  if (num > 0) {
    h2[17 - 1].innerHTML = `
      ${num} is positive
    `;
  } else if (num < 0) {
    h2[17 - 1].innerHTML = `
      ${num} is negative
    `;
  } else {
    h2[17 - 1].innerHTML = `
    ${num} is zero
  `;
  }
};

// Problem 18
buttons[18 - 1].onclick = function () {
  num = +inputs[31 - 1].value;
  if (num % 5 == 0 && num % 11 == 0) {
    h2[18 - 1].innerHTML = `
      Number can divisible by 5 and 11
    `;
  } else {
    h2[18 - 1].innerHTML = `
      Number can't divisible by 5 and 11
    `;
  }
};

// Problem 19
buttons[19 - 1].onclick = function () {
  num = +inputs[32 - 1].value;
  if (num % 4 == 0) {
    h2[19 - 1].innerHTML = `
    ${num} year is a leap year
    `;
  } else {
    h2[19 - 1].innerHTML = `
    ${num} not a leap year
    `;
  }
};

// Problem 20
let arrOfChar = [];
for (let i = 65; i <= 90; i++) {
  arrOfChar.push(String.fromCharCode(i));
  arrOfChar.push(String.fromCharCode(i).toLocaleLowerCase());
}
buttons[20 - 1].onclick = function () {
  if (arrOfChar.includes(inputs[33 - 1].value)) {
    h2[20 - 1].innerHTML = `
    character is alphabet
    `;
  } else {
    h2[20 - 1].innerHTML = `
    character not alphabet
    `;
  }
};

// Problem 21
let vowelArray = ["a", "e", "i", "o", "u"];
buttons[21 - 1].onclick = function () {
  if (vowelArray.includes(inputs[34 - 1].value)) {
    h2[21 - 1].innerHTML = `
    character is vowel
    `;
  } else {
    h2[21 - 1].innerHTML = `
    character is consonant
    `;
  }
};

// Problem 22
buttons[22 - 1].onclick = function () {
  if (inputs[35 - 1].value == inputs[35 - 1].value.toUpperCase()) {
    h2[22 - 1].innerHTML = `
    character is uppercase 
    `;
  } else {
    h2[22 - 1].innerHTML = `
    character is lowercase 
    `;
  }
};

// Problem 23
let daysNames = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "	Wednesday",
  "Thursday",
  "Friday",
];
buttons[23 - 1].onclick = function () {
  h2[23 - 1].innerHTML = `
    day is ${daysNames[inputs[36 - 1].value - 1]} 
    `;
  if (inputs[36 - 1].value > 7 || inputs[36 - 1].value < 1) {
    h2[23 - 1].innerHTML = `
      please enter valid day
      `;
  }
};

// Problem 24
buttons[24 - 1].onclick = function () {
  let month = inputs[37 - 1].value;
  let year = inputs[38 - 1].value;
  if (
    month == "1" ||
    month == "3" ||
    month == "5" ||
    month == "7" ||
    month == "8" ||
    month == "10" ||
    month == "12"
  ) {
    h2[24 - 1].innerHTML = `
      ${month} is 31 days
    `;
  } else if (month == "4" || month == "6" || month == "9" || month == "11") {
    h2[24 - 1].innerHTML = `
      ${month} is 30 days
    `;
  } else if (month == "2") {
    if (year % 4 == 0) {
      h2[24 - 1].innerHTML = `
      ${month} is 29 days
    `;
    } else {
      h2[24 - 1].innerHTML = `
      ${month} is 28 days
    `;
    }
  }
};

// Problem 25
buttons[25 - 1].onclick = function () {
  let angle1 = +inputs[39 - 1].value;
  let angle2 = +inputs[40 - 1].value;
  let angle3 = +inputs[41 - 1].value;
  if (
    angle1 + angle2 + angle3 == 180 &&
    angle1 != 0 &&
    angle2 != 0 &&
    angle3 != 0
  ) {
    h2[25 - 1].innerHTML = `
    triangle is valid 
  `;
  } else {
    h2[25 - 1].innerHTML = `
    triangle not valid 
  `;
  }
};

// Problem 26
buttons[26 - 1].onclick = function () {
  let side1 = +inputs[42 - 1].value;
  let side2 = +inputs[43 - 1].value;
  let side3 = +inputs[44 - 1].value;
  if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    h2[26 - 1].innerHTML = `
    triangle is valid 
  `;
  } else {
    h2[26 - 1].innerHTML = `
    triangle not valid 
  `;
  }
};

// Problem 27
buttons[27 - 1].onclick = function () {
  let side1 = +inputs[45 - 1].value;
  let side2 = +inputs[46 - 1].value;
  let side3 = +inputs[47 - 1].value;
  if (side1 != 0 && side2 != 0 && side3 != 0) {
    if (side1 == side2 && side2 == side3) {
      h2[27 - 1].innerHTML = `
      triangle is equilateral
    `;
    } else if (side1 == side2 || side2 == side3 || side3 == side1) {
      h2[27 - 1].innerHTML = `
      triangle is isosceles 
    `;
    } else if (
      side1 + side2 > side3 &&
      side1 + side3 > side2 &&
      side2 + side3 > side1
    ) {
      h2[27 - 1].innerHTML = `
      triangle is scalene 
    `;
    } else {
      h2[27 - 1].innerHTML = `
      triangle not valid 
    `;
    }
  } else {
    h2[27 - 1].innerHTML = `
    triangle not valid 
  `;
  }
};

// Problem 28
buttons[28 - 1].onclick = function () {
  let mark1 = +inputs[48 - 1].value;
  let mark2 = +inputs[49 - 1].value;
  let mark3 = +inputs[50 - 1].value;
  let mark4 = +inputs[51 - 1].value;
  let mark5 = +inputs[52 - 1].value;
  let totalStudentMark = mark1 + mark2 + mark3 + mark4 + mark5;
  let totalMarks = 5 * 100;
  let studentpercentage = (totalStudentMark / totalMarks) * 100;
  if (totalStudentMark <= totalMarks) {
    if (studentpercentage >= 90) {
      h2[28 - 1].innerHTML = "Your Grade is A";
    } else if (studentpercentage >= 80 && studentpercentage < 90) {
      h2[28 - 1].innerHTML = "Your Grade is B";
    } else if (studentpercentage >= 70 && studentpercentage < 80) {
      h2[28 - 1].innerHTML = "Your Grade is C";
    } else if (studentpercentage >= 60 && studentpercentage < 70) {
      h2[28 - 1].innerHTML = "Your Grade is D";
    } else if (studentpercentage >= 40 && studentpercentage < 60) {
      h2[28 - 1].innerHTML = "Your Grade is E";
    } else if (studentpercentage < 40) {
      h2[28 - 1].innerHTML = "Your Grade is F";
    }
  } else {
    h2[28 - 1].innerHTML = "please enter valid grade";
  }
};

// Problem 29
buttons[29 - 1].onclick = function () {
  let num = inputs[53 - 1].value;
  switch (num) {
    case "1":
      h2[29 - 1].innerHTML = "Saturday";
      break;
    case "2":
      h2[29 - 1].innerHTML = "Sunday";
      break;
    case "3":
      h2[29 - 1].innerHTML = "Monday";
      break;
    case "4":
      h2[29 - 1].innerHTML = "Tuesday";
      break;
    case "5":
      h2[29 - 1].innerHTML = "Wednesday";
      break;
    case "6":
      h2[29 - 1].innerHTML = "Thursday";
      break;
    case "7":
      h2[29 - 1].innerHTML = "Friday";
      break;
    default:
      h2[29 - 1].innerHTML = "not valid";
  }
};

// Problem 30
buttons[30 - 1].onclick = function () {
  let month = inputs[54 - 1].value;
  let year = inputs[55 - 1].value;
  switch (month) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
      h2[30 - 1].innerHTML = `Days in Month: 31`;
      break;

    case "2":
      switch (true) {
        case year % 4 == 0:
          h2[30 - 1].innerHTML = `Days in Month: 29`;
          break;
        default:
          h2[30 - 1].innerHTML = `Days in Month: 28`;
      }
      break;

    case "4":
    case "6":
    case "9":
    case "11":
      h2[30 - 1].innerHTML = `Days in Month: 30`;
      break;

    default:
      h2[30 - 1].innerHTML = `please enter valid data`;
  }
};

// Problem 31
buttons[31 - 1].onclick = function () {
  let char = inputs[56 - 1].value;
  switch (char) {
    case "a":
    case "o":
    case "u":
    case "i":
    case "e":
      h2[31 - 1].innerHTML = `${char} is vowel`;
      break;
    default:
      h2[31 - 1].innerHTML = `${char} is consonant`;
  }
};

// Problem 32
buttons[32 - 1].onclick = function () {
  let num1 = inputs[57 - 1].value;
  let num2 = inputs[58 - 1].value;
  switch (true) {
    case num1 > num2:
      h2[32 - 1].innerHTML = `${num1} is maximum`;
      break;
    case num1 < num2:
      h2[32 - 1].innerHTML = `${num2} is maximum`;
      break;
    case num1 == num2:
      h2[32 - 1].innerHTML = `two numbers are equivalent`;
      break;
    default:
      h2[32 - 1].innerHTML = `enter valid data`;
  }
};

// Problem 33
buttons[33 - 1].onclick = function () {
  let num = inputs[59 - 1].value;
  switch (true) {
    case num % 2 == 0:
      h2[33 - 1].innerHTML = `${num} is even`;
      break;
    case num % 2 != 0:
      h2[33 - 1].innerHTML = `${num} is odd`;
      break;
    default:
      h2[33 - 1].innerHTML = `enter valid data`;
  }
};

// Problem 34
buttons[34 - 1].onclick = function () {
  let num = inputs[60 - 1].value;
  switch (true) {
    case num > 0:
      h2[34 - 1].innerHTML = `${num} positive`;
      break;
    case num < 0:
      h2[34 - 1].innerHTML = `${num} negative`;
      break;
    case num == 0:
      h2[34 - 1].innerHTML = `${num} is zero`;
      break;
    default:
      h2[34 - 1].innerHTML = `enter valid data`;
  }
};

// Problem 35
buttons[35 - 1].onclick = function () {
  let num1 = +inputs[61 - 1].value;
  let num2 = +inputs[63 - 1].value;
  let operator = inputs[62 - 1].value;
  switch (operator) {
    case "+":
      h2[35 - 1].innerHTML = `${num1} ${operator} ${num2} = ${num1 + num2}`;
      break;
    case "-":
      h2[35 - 1].innerHTML = `${num1} ${operator} ${num2} = ${num1 - num2}`;
      break;
    case "/":
      h2[35 - 1].innerHTML = `${num1} ${operator} ${num2} = ${num1 / num2}`;
      break;
    case "*":
      h2[35 - 1].innerHTML = `${num1} ${operator} ${num2} = ${num1 * num2}`;
      break;
    case "**":
      h2[35 - 1].innerHTML = `${num1} ${operator} ${num2} = ${num1 ** num2}`;
      break;
    case "%":
      h2[35 - 1].innerHTML = `${num1} ${operator} ${num2} = ${num1 % num2}`;
      break;
    default:
      h2[35 - 1].innerHTML = `please enter valid data`;
  }
};

// Problem 36
buttons[36 - 1].onclick = function () {
  let num = +inputs[64 - 1].value;
  let box = "";
  let i = 0;
  while (i < num) {
    box += `<h3>${i + 1}</h3>`;
    i++;
  }
  h2[36 - 1].innerHTML = box;
};

// Problem 37
buttons[37 - 1].onclick = function () {
  let num = +inputs[65 - 1].value;
  let box = "";
  let i = num;
  while (i > 0) {
    box += `<h3>${i}</h3>`;
    i--;
  }
  h2[37 - 1].innerHTML = box;
};

// Problem 38
buttons[38 - 1].onclick = function () {
  let arrayAZ = [];
  let i = 65;
  while (i <= 90) {
    arrayAZ.push(String.fromCharCode(i));
    i++;
  }

  let box = "";
  let j = 0;
  while (j < arrayAZ.length) {
    box += `${arrayAZ[j]} `;
    j++;
  }
  h2[38 - 1].innerHTML = box;
};

// Problem 39
buttons[39 - 1].onclick = function () {
  let box = "";
  let i = 1;
  while (i <= 100) {
    if (i % 2 == 0) {
      box += `${i} `;
    }
    i++;
  }
  h2[39 - 1].innerHTML = box;
};

// Problem 40
buttons[40 - 1].onclick = function () {
  let box = "";
  let i = 1;
  while (i <= 100) {
    if (i % 2 != 0) {
      box += `${i} `;
    }
    i++;
  }
  h2[40 - 1].innerHTML = box;
};

// Problem 41
buttons[41 - 1].onclick = function () {
  let num = +inputs[66 - 1].value;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  h2[41 - 1].innerHTML = sum;
};

// Problem 42
buttons[42 - 1].onclick = function () {
  let num = +inputs[67 - 1].value;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  h2[42 - 1].innerHTML = sum;
};

// Problem 43
buttons[43 - 1].onclick = function () {
  let num = +inputs[68 - 1].value;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  h2[43 - 1].innerHTML = sum;
};

// Problem 44
buttons[44 - 1].onclick = function () {
  let num = +inputs[69 - 1].value;
  // let multiplication = 0
  let box = "";
  for (let i = 1; i <= 10; i++) {
    box += `
     <h3>${num} * ${i} = ${num * i}</h3>
    `;
  }
  h2[44 - 1].innerHTML = box;
};

// Problem 45
buttons[45 - 1].onclick = function () {
  h2[45 - 1].innerHTML = `number length = ${inputs[70 - 1].value.length}`;
};

// Problem 46
buttons[46 - 1].onclick = function () {
  let input = inputs[71 - 1].value;
  h2[46 - 1].innerHTML = `first number ${input[0]} last number ${
    input[input.length - 1]
  }`;
};

// Problem 47
buttons[47 - 1].onclick = function () {
  let input = inputs[72 - 1].value;
  let num1 = +input[0];
  let num2 = +input[input.length - 1];
  h2[47 - 1].innerHTML = `${num1} + ${num2} = ${num1 + num2}`;
};

// Problem 48
buttons[48 - 1].onclick = function () {
  let input = inputs[73 - 1].value;
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    arr.push(input[i]);
  }
  let num1 = arr[0];
  let num2 = arr[arr.length - 1];
  arr.splice(arr.length - 1, 1);
  arr.push(num1);
  arr.splice(0, 1);
  arr.unshift(num2);
  h2[48 - 1].innerHTML = `after swap ${arr.join("")}`;
};

// Problem 49
// let input = inputs[74 - 1].value;
buttons[49 - 1].onclick = function () {
  let input = inputs[74 - 1].value;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += +input[i];
  }
  h2[49 - 1].innerHTML = `sum of digits = ${sum}`;
};

// Problem 50
buttons[50 - 1].onclick = function () {
  let box = "";
  for (let i = 65; i < 91; i++) {
    box += `<h3>${i} = ${String.fromCharCode(i)}</h3>`;
  }
  h2[50 - 1].innerHTML = `${box}`;
};

// Problem 51
buttons[51 - 1].onclick = function () {
  let base = inputs[75 - 1].value;
  let exponent = inputs[76 - 1].value;
  let arr = [];
  let multiplication = base;
  for (let i = 0; i < exponent; i++) {
    arr.push(+base);
  }
  // console.log(arr);
  for (let j = 0; j < arr.length - 1; j++) {
    multiplication *= arr[j];
  }
  h2[51 - 1].innerHTML = `${base} power ${exponent} = ${multiplication}`;
};

// Problem 52
buttons[52 - 1].onclick = function () {
  let box = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < 5; j++) {
      box += `*`;
    }
    box += "<br>";
  }
  h2[52 - 1].innerHTML = `${box}`;
};

// Problem 53
buttons[53 - 1].onclick = function () {
  let box = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
      box += `*`;
    }
    box += "<br>";
  }
  h2[53 - 1].innerHTML = `${box}`;
};

// Problem 54
buttons[54 - 1].onclick = function () {
  let box = "";
  for (let i = 5; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      box += `*`;
    }
    box += "<br>";
  }
  h2[54 - 1].innerHTML = `${box}`;
};

// Problem 55
buttons[55 - 1].onclick = function () {
  let input = inputs[77 - 1].value;
  function cube(n) {
    return n * n * n;
  }
  h2[55 - 1].innerHTML = `Cube of ${input} = ${cube(input)}`;
};

// Problem 56
buttons[56 - 1].onclick = function () {
  let input = inputs[78 - 1].value;
  function oddOreven(n) {
    if (n % 2 == 0) {
      return `even`;
    } else {
      return `odd`;
    }
  }
  h2[56 - 1].innerHTML = `${input} is ${oddOreven(input)}`;
};

// Problem 57
buttons[57 - 1].onclick = function () {
  let input = inputs[79 - 1].value;
  let box = 0;
  for (let i = 1; i <= input; i++) {
    box += i;
  }
  h2[57 - 1].innerHTML = `Average of all natural numbers = ${box / input}`;
};

// Problem 58
buttons[58 - 1].onclick = function () {
  let input = inputs[80 - 1].value.length;
  h2[58 - 1].innerHTML = `length of a string = ${input}`;
};

// Problem 59
buttons[59 - 1].onclick = function () {
  let input1 = inputs[81 - 1].value;
  let input2 = inputs[82 - 1].value;
  let concat = input1 + input2;
  h2[59 - 1].innerHTML = `${concat}`;
};

// Problem 60
buttons[60 - 1].onclick = function () {
  let input1 = inputs[83 - 1].value;
  let input2 = inputs[84 - 1].value;
  if (input1.toLowerCase() === input2.toLowerCase()) {
    h2[60 - 1].innerHTML = `two string are similar`;
  } else {
    h2[60 - 1].innerHTML = `two string are not similar`;
  }
};

// Problem 61
buttons[61 - 1].onclick = function () {
  let input = inputs[85 - 1].value;
  let box = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i].toLowerCase() === input[i]) {
      box += input[i].toUpperCase();
    } else {
      box += input[i];
    }
  }
  h2[61 - 1].innerHTML = box;
};

// Problem 62
buttons[62 - 1].onclick = function () {
  let input = inputs[86 - 1].value;
  let box = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i].toUpperCase() === input[i]) {
      box += input[i].toLowerCase();
    } else {
      box += input[i];
    }
  }
  h2[62 - 1].innerHTML = box;
};

// Problem 63
buttons[63 - 1].onclick = function () {
  let input = inputs[87 - 1].value;
  let box = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i].toLowerCase() === input[i]) {
      box += input[i].toUpperCase();
    } else {
      box += input[i].toLowerCase();
    }
  }
  h2[63 - 1].innerHTML = box;
};

// Problem 64
let arrOfNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
buttons[64 - 1].onclick = function () {
  let input = inputs[88 - 1].value;
  numOfChars = 0;
  numOfNumbers = 0;
  numOfspecial = 0;
  for (let i = 0; i < input.length; i++) {
    if (arrOfChar.includes(input[i])) {
      numOfChars++;
    } else if (arrOfNumbers.includes(input[i])) {
      numOfNumbers++;
    } else {
      numOfspecial++;
    }
  }
  h2[
    64 - 1
  ].innerHTML = `this input have ${numOfChars} characters and ${numOfspecial} character and ${numOfNumbers} numbers`;
};

// Problem 65
buttons[65 - 1].onclick = function () {
  let input = inputs[89 - 1].value;
  numOfvowels = 0;
  numOfconsonants = 0;
  for (let i = 0; i < input.length; i++) {
    if (vowelArray.includes(input[i])) {
      numOfvowels++;
    } else {
      numOfconsonants++;
    }
  }
  h2[
    65 - 1
  ].innerHTML = `this input have ${numOfvowels} vowels characters and ${numOfconsonants} consonants characters`;
};

// Problem 66
buttons[66 - 1].onclick = function () {
  let input = inputs[90 - 1].value;
  let numOfwords = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " " && input[i + 1] !== " ") {
      numOfwords++;
    }
  }
  h2[66 - 1].innerHTML = `this input have ${numOfwords} words`;
};

// Problem 67
buttons[67 - 1].onclick = function () {
  let input = inputs[91 - 1].value;
  let box = "";
  for (let i = input.length - 1; i >= 0; i--) {
    box += input[i];
  }
  h2[67 - 1].innerHTML = `reverse of a string is (${box})`;
};

// Problem 68
buttons[68 - 1].onclick = function () {
  let input = inputs[92 - 1].value;
  box1 = "";
  box2 = "";
  for (let i = 0; i < input.length / 2; i++) {
    box1 += input[i];
    box2 += input[input.length - 1 - i];
  }
  if (box1 === box2) {
    h2[68 - 1].innerHTML = `${input} is palindrome`;
  } else {
    h2[68 - 1].innerHTML = `${input} not palindrome`;
  }
};

// Problem 69
// function reverse(str, start, end) {
//   let temp;
//   while (start <= end) {
//     temp = str[start];
//     str[start] = str[end];
//     str[end] = temp;
//     start++;
//     end--;
//   }
// }
// function reverseWords(s) {
//   s = s.split("");
//   let start = 0;
//   for (let end = 0; end < s.length; end++) {
//     if (s[end] == " ") {
//       reverse(s, start, end);
//       start = end + 1;
//     }
//   }
//   reverse(s, start, s.length - 1);
//   reverse(s, 0, s.length - 1);
//   return s.join("");
// }
// var s = "i like this program very much ";
// console.log(reverseWords(s));

// Problem 70
buttons[70 - 1].onclick = function () {
  let input1 = inputs[94 - 1].value;
  let input2 = inputs[95 - 1].value;
  let char = 0;
  for (let i = 0; i < input1.length; i++) {
    if (
      input1[i].toLowerCase() == input2 ||
      input1[i].toUpperCase() == input2
    ) {
      char++;
    }
  }
  h2[70 - 1].innerHTML = `${input2} found ${char} times`;
};

// Problem 71
buttons[71 - 1].onclick = function () {
  let input = inputs[96 - 1].value;
  let box = "";
  for (let i = 0; i < input.length; i++) {
    if (i == 0) {
      continue;
    } else {
      box += input[i];
    }
  }
  h2[71 - 1].innerHTML = `new string is ${box}`;
};

// Problem 72
buttons[72 - 1].onclick = function () {
  let input = inputs[97 - 1].value;
  let box = "";
  for (let i = 0; i < input.length; i++) {
    if (arrOfChar.includes(input[i])) {
      continue;
    } else {
      box += input[i];
    }
  }
  h2[72 - 1].innerHTML = `new string is ${box}`;
};

// Problem 73
buttons[73 - 1].onclick = function () {
  let input = inputs[98 - 1].value;
  let box = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] == " ") {
      continue;
    } else {
      box += input[i];
    }
  }
  h2[73 - 1].innerHTML = `new string is ${box}`;
};

// Problem 74
buttons[74 - 1].onclick = function () {
  let input = inputs[99 - 1].value;
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    arr.push(input[i]);
  }
  function removeDuplicate(arr) {
    return arr.filter((item, i) => arr.indexOf(item) === i);
  }
  h2[74 - 1].innerHTML = `string after remove duplicate ${removeDuplicate(
    arr
  ).join("")}`;
};

// Problem 75
buttons[75 - 1].onclick = function () {
  let arr = [3, -2, 5, -3, 4];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr.splice(i, 1);
    }
  }
  h2[75 - 1].innerHTML = `array after remove negative elements ${arr}`;
};

// Problem 76
buttons[76 - 1].onclick = function () {
  let arr = [3, 2, 5, 6, 4];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  h2[76 - 1].innerHTML = `array after remove negative elements ${sum}`;
};

// Problem 77
buttons[77 - 1].onclick = function () {
  let arr = [3, 2, 5, 6, 4];
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    }
  }
  h2[77 - 1].innerHTML = `even = ${sumEven} , odd = ${sumOdd}`;
};

// Problem 78
buttons[78 - 1].onclick = function () {
  let arr = [3, -2, 5, -3, 4];
  let sumNegative = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      continue;
    } else {
      sumNegative += arr[i];
    }
  }
  h2[78 - 1].innerHTML = `count number of negative elements = ${sumNegative}`;
};

// Problem 79
buttons[79 - 1].onclick = function () {
  let mainarr = [3, -2, 5, -3, 4];
  let newarr = [];
  for (let i = 0; i < mainarr.length; i++) {
    newarr.push(mainarr[i]);
  }
  h2[79 - 1].innerHTML = `new array => [${newarr}]`;
};

// Problem 80
buttons[80 - 1].onclick = function () {
  let mainarr = [3, -9, 5, -3, 4];
  let num1 = 1;
  let num2 = -2;
  let num3 = 3;
  mainarr.unshift(num1);
  mainarr.splice(2, 0, num2);
  mainarr.push(num3);
  h2[80 - 1].innerHTML = `new array => [${mainarr}]`;
};

// Problem 81
buttons[81 - 1].onclick = function () {
  let mainarr = [3, -9, 5, -3, 4];
  h2[81 - 1].innerHTML = `new array => [${mainarr.reverse()}]`;
};
