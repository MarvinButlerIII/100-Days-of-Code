// Task 1: Code a Person class
// WRITE YOUR CODE HERE - Define the Person class
// WRITE YOUR CODE HERE - Add a constructor with default parameters
// WRITE YOUR CODE HERE - Add the sleep() method
// WRITE YOUR CODE HERE - Add the doSomethingFun() method

// Task 2: Code a Worker class
// WRITE YOUR CODE HERE - Define the Worker class that extends Person
// WRITE YOUR CODE HERE - Add a constructor with additional parameters
// WRITE YOUR CODE HERE - Add the goToWork() method

// Task 3: Code an intern object, run methods
//function intern() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
    // WRITE YOUR CODE HERE - Call the goToWork() method
    // WRITE YOUR CODE HERE - Return the intern object
//}

// Task 4: Code a manager object, methods
//function manager() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
    // WRITE YOUR CODE HERE - Call the doSomethingFun() method
    // WRITE YOUR CODE HERE - Return the manager object
//}

// Task 1: Code a Person class

class Person {
    constructor(name = "Tom", age = 20, energy) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    doSomethingFun() {
        this.energy -= 10;
        console.log('Energy is decreasing, currently at:', this.energy)
    }
}

// Task 2: Code a Worker Class

class Worker extends Person {
    constructor(name, age, energy = 100, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    gotToWork() {
       this.xp += 10;

    }
}

// Task 3: Code an intern object, run methods

function intern() {
    var internObj = new Worker("Bob", 21, 110, 0, 10);
    internObj.gotToWork();
    return internObj;
}

// Task 4: Code a manager object, methods

function manager() {
    var managerObj = new Worker("Alice", 30, 120, 100, 30);
    managerObj.doSomethingFun();
    return managerObj;
}


// Resource: https://www.coursera.org/learn/programming-with-javascript/programming/2M30X/building-an-object-oriented-program/lab?path=%2F%3Ffolder%3D%2Fhome%2Fcoder%2Fproject%2Flearn