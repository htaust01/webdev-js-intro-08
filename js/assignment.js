"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

// use reduce to loop through array, like forEach it takes a callback but the first
// parameter of is the aggregate value and the second is the element of the array
const findSmallestNumber = arr => arr.reduce((min, el) => min < el ? min : el);
const findLargestNumber = arr => arr.reduce((max, el) => max > el ? max : el);
const findAverage = arr => arr.reduce((sum, el) => sum + el) / arr.length;

const render = () => {
   smallestNumberElement.innerText = findSmallestNumber(myNumbers);
   largestNumberElement.innerText = findLargestNumber(myNumbers);
   averageNumberElement.innerText = findAverage(myNumbers);
}

submissionBtn.addEventListener("click", render);
