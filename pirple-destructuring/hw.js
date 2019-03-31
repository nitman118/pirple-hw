obj={ //JS Object
    myName: "Nitish",
    age: 26,
    hobbies:["squash", "TT"],
    place:{
      birth:"lucknow",
      country:"India"
    }
  }; 
  
  //constant to destructure into from object 'obj'
  const {myName:name, //alias of name
         age,
         hobbies:[sp1,sp2], //array destructuring
        place:{birth:city,country},//nested object destructuring with aliasing
        }=obj
  
  console.log(`${name} is ${age} years old and likes playing ${sp1} and ${sp2}. He was born in ${city} in ${country}.`);
  
  