'use strict';

// Enkapsulacja dla function 
// function User(name, age){
//     this.name = name;
//     let userAge = age; // zostala stworzona zmienna ktora nie jest dostepna zewnatz 

//     this.say = function(){
//         console.log(`User name: ${this.name}, age: ${userAge}`);
//     },

//     this.getAge = function(){
//         return userAge; 
//     },

//     this.setAge = function(age){
//        // mozemy dokonywac roznych manipulacji (sprawdzanie warunkow)
//     if(typeof age === 'number' && age > 0 && age < 110){
//         userAge = age; 
//     } else {
//         console.log('Invalid value'); 
//     }
//     }

// }

// const person = new User('Dmytro', 32); 
// console.log(person.name);
// // console.log(person.userAge);
// console.log(person.getAge());

// person.setAge(30); 
// person.setAge(300); 

// console.log(person.getAge());



// person.userAge = 30;// nie zadziala
// console.log(person.age); // mozna od razu zmieniac wlasciwosc 

// person.say();

// Enkapsulacja nie pozwala zmieniac dane wewnatrz 


// Enkapsulacja dla klassow  
class User{
constructor(name, age){
    this.name = name;
    this._age = age;// dodajemy lodash dla enkapsulacji danych zewnatrz 

}
    // surname = 'Voloshyn'; 
    #surname = 'Voloshyn'; // robimy wlasciwosc prywatna  


    // say(){
    //     console.log(`User name: ${this.name} ${this.surname}, age: ${this._age}`); // ${this.surname} - tworzenia wlasiwosci poza construktorem dziala tylko w chromie 
    // }

    say(){
        console.log(`User name: ${this.name} ${this.#surname}, age: ${this._age}`); // ${{this.#surname} - prywatna wlasiwosc nie dostepna zewnatrz 
    }

    get age(){
        return this._age; 
    }

    set age(age){
       // mozemy dokonywac roznych manipulacji (sprawdzanie warunkow)
    if(typeof age === 'number' && age > 0 && age < 110){
        this._age = age; 
    } else {
        console.log('Invalid value'); 
    }
    }

    get surname(){
        return this.#surname 
    }

    set surname(surname){
        return this.#surname = surname; 
    }

}

const person = new User('Dmytro', 32); 
console.log(person.age);
person.age = 99; 
console.log(person.age);
console.log(person.surname);
person.surname = 'Zhura';
console.log(person.surname);






person.say();