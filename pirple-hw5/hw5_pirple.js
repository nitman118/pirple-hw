/*
This is HW 5 of pirple.com Keeping up with javascript ES6

*/
'use strict';

const timeAdder = (val1, lab1, val2, lab2) => {
    let timeVal = 0;

    function validateInput(val, lab) {

        if ((val > 1 && lab.slice(-1) === 's') || (val === 1 && lab.slice(-1) !== 's')) {
            return true;
        }
        else {
            return false;
        }
    }

    function makeSwitch(val, lab) {

        if (validateInput(val, lab)) {


            switch (lab) {

                case 'second': case 'seconds':
                    timeVal += val;
                    break;
                case 'minute': case 'minute':
                    timeVal += val * 60;
                    break;
                case 'hours': case 'hour':
                    timeVal += val * 60 * 60;
                    break;
                case 'day': case 'days':
                    timeVal += val * 24 * 60 * 60;
                    break;
                default:
                    console.log('default executed');
            }
            return true;

        }
        else {
            
            return false;
        }
    }

    const stat1 = makeSwitch(val1, lab1);
    const stat2 = makeSwitch(val2, lab2);

    if (stat1 + stat2 === 2) {
        return [timeVal, 'seconds'];
    } else {
        return false;
    }

};

console.log(timeAdder(5, "seconds", 3, "seconds"));
console.log(timeAdder(5, "hour", 5, "minutes")); // This is impossible because "hour" is singular and 5 is plural
console.log(timeAdder(false, false, 5, "minutes")); // This is invalid because the first 2 arguments are not the correct types

console.log(timeAdder({}, "days", 5, "minutes")); // This is invalid because the first argument is the wrong type