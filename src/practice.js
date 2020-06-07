// const alph = ['a', 'b', 'c', 'd'];
// const numb = [1, 2, 3, 4];

// const [a,b] = [alph, numb];

// console.log(a);
// console.log(b);

// console.log(this);

// const globalFunc = ()=>{
//     console.log(numb);
// }
// globalFunc();

// function Dog(name, age){
//     this.name = name;
//     this.age = age;

//     this.bark = ()=>{
//         console.log(this.name+" is barking");
//     }
// }

// const Dog1 = new Dog("pluto", 1);

// console.log(Dog1.name);
// Dog1.bark();

//.............
//Car prototype
//-------------
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    this.isRunning = false;
}

Car.prototype.turnOn = function(){
    this.isRunning = true;
}

Car.prototype.turnOff = function(){
    this.isRunning = false;
}

Car.prototype.honk = function(){
    if(this.isRunning){
        return "beep";
    }
}

var car1 = new Car("toyota", "corolla", 1990);
var car2 = new Car("toyota", "sprinter", 1990);

car1.turnOn();

console.log(car1.isRunning);
console.log(car2.isRunning);
console.log(car1.honk());
console.log(car2.honk());