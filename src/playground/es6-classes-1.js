class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hello ${this.name}! You are ${this.age} years old!`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getGreeting() {
        let description = super.getGreeting();
        if (this.hasMajor()) {
            description += ` Your major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` Your homelocation is ${this.homeLocation}.`;
        }
        return greeting;
    }
}
const me = new Traveler('Sampsa Saari', 30, 'Oulu');
console.log(me);
console.log(me.getGreeting())
const test = new Student();
console.log(test);
console.log(test.getGreeting());