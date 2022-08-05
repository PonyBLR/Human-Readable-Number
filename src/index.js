module.exports = function toReadable(number) {
    let stringNumber = String(number);
  
    switch (stringNumber.length) {
        case 1:
            return units[stringNumber];
        case 2:
            if (stringNumber[0] === "1") {
                return secondDecade[stringNumber];
            } else if (stringNumber[1] === "0") {
                return (decades[stringNumber[0]]);
            } else return (decades[stringNumber[0]]) + " " + (units[stringNumber[1]]);
        case 3:
            if (stringNumber[1] === "1") {
                return (units[stringNumber[0]]) + " hundred " + (secondDecade[stringNumber.slice(1)]);
            } else if ((stringNumber[1] === "0") && (stringNumber[2] === "0")) {
                return (units[stringNumber[0]]) + " hundred";
            } else if (stringNumber[2] === "0") {
                return (units[stringNumber[0]]) + " hundred " + (decades[stringNumber[1]]);
            } else if (stringNumber[1] === "0") {
                return (units[stringNumber[0]]) + " hundred " + (units[stringNumber[2]]);
            } else {
                return (units[stringNumber[0]]) + " hundred " + (decades[stringNumber[1]]) + " " + (units[stringNumber[2]]);
            }

    }
}

const units = {
    "0": "zero", "1": "one","2": "two","3": "three","4": "four", "5": "five",
    "6": "six","7": "seven", "8": "eight", "9": "nine",
}
const secondDecade = {
    "10": "ten","11": "eleven", "12": "twelve", "13": "thirteen", "14": "fourteen",
    "15": "fifteen","16": "sixteen","17": "seventeen", "18": "eighteen", "19": "nineteen",
}

const decades = {
    "2": "twenty", "3": "thirty",
     "4": "forty", "5": "fifty",  "6": "sixty", "7": "seventy", "8": "eighty", "9": "ninety",}
