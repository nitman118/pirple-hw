/*
This is HW 4 of pirple.com Keeping up with javascript ES6

*/
'use strict';

const men = ['Socrates', 'Aristotle', 'Napolean', 'Ashoka']; //collection of men

let man = 'Socrates';

const isMortal = (n, manArr, ...args) => {
    if (typeof n !== 'string') {
        return;
    }
    else {
        console.log('Args not required:' + args);
        if (manArr.includes(n)) {
            return true;
        }
        return false;
    }
};

console.log('is Socrates Mortal:?' + isMortal('Socrates', men)); //true

// BONUS
class Cake {  //define Cake class
    constructor(type, sweetness, containsEgg) {
        this.type = type;
        this.sweetness = sweetness;
        this.containsEgg = containsEgg;
    }
}

const vanilla = new Cake('Vanilla', 8, true);
const chocolate = new Cake('Chocolate', 6, false);

const isCakeChocolate = (myObjArr, isChoco) => {

    let longString = myObjArr.map((element) => {
        if (element.type === 'Chocolate' && isChoco) {
            return 'isChocolate'
        }
        else{
            return 'is not chocolate'
        }

    });
    return longString.join(' ');

}

console.log(isCakeChocolate([vanilla,chocolate],true)); // return is not chocolate isChocolate
