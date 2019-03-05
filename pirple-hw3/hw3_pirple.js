/*
This is HW 3of pirple.com Keeping up with javascript ES6

*/
'use strict';

const men =['Socrates', 'Aristotle','Napolean','Ashoka']; //collection of men

let man ='Socrates';

if (men.includes(man)){
    console.log(`${man} is a man so he is mortal`);
}

// BONUS
class Cake {  //define Cake class
    constructor(type, sweetness, containsEgg) {
        this.type = type;
        this.sweetness = sweetness;
        this.containsEgg = containsEgg;
    }
}

const vanilla = new Cake('Vanilla',8,true);
const chocolate = new Cake('Chocolate',6,false);

if(vanilla.type!=='Chocolate'){
    console.log('This cake is vanilla');
}