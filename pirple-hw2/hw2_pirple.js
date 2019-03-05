/*
This is HW 2 of pirple.com Keeping up with javascript ES6
JavaScript Declarations are Hoisted
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.
var declarations are hoisted but let and const aren't
*/
'use strict';

function varHoisting(){
hoisted=true;
    if (hoisted){
        var hoisted=true;
        console.log('Hoisted')
    }
}

varHoisting();

function letHoisting(){
    lhoisted=true;
        if (lhoisted){
            let lhoisted=true;
            console.log('Hoisted')
        }
}

letHoisting(); //doesn't work since declaration of let variable 'lhoisted' is not hoisted at the top of the function


function constHoisting(){
    choisted=true;
        if (choisted){
            let choisted=true;
            console.log('Hoisted')
        }
}

constHoisting(); //doesn't work since declaration of const variable 'choisted' is not hoisted at the top of the function