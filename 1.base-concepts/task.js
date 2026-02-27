"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant;
  discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant == 0) {
    arr.push(-b / (2 * a));
  }  else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a))
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let payment = S * (P + (P / ((Math.pow((1 + P), countMonths)) - 1)));
  let totalPayment = (payment * countMonths).toFixed(2);
  return Number(totalPayment);
}