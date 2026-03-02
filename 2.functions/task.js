function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a,b) => a + b);
  let avg = (sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: Number(avg) };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length != 0) {
    sum = arr.reduce((a,b) => a + b);
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let diff = 0;
  if (arr.length != 0) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    diff = max - min
  }
  return diff;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length != 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
      } else {
        sumOddElement = sumOddElement + arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  } else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length != 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement += 1;
      }
    }
    return sumEvenElement / countEvenElement;
  } else {
    return 0;
  }

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = 0;
  let result = [];

  for (let i = 0; i < arrOfArr.length; i++) {
    result[i] = func(...arrOfArr[i]);
  }
  maxWorkerResult = Math.max(...result);
  return maxWorkerResult;
}
