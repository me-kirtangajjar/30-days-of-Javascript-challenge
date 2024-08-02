// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("John Doe", 25);
console.log(person1.greet()); // Output: Hello, my name is John Doe and I am 25 years old.

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }
}

const person2 = new Person("Jane Doe", 28);
person2.updateAge(29); // Output: Updated age: 29

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }
}

const student1 = new Student("Alice", 20, "S12345");
console.log(student1.getStudentId()); // Output: Student ID: S12345

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

const student2 = new Student("Bob", 22, "S67890");
console.log(student2.greet()); // Output: Hello, my name is Bob, I am 22 years old, and my student ID is S67890.

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static genericGreet() {
    return "Hello, welcome!";
  }
}

console.log(Person.genericGreet()); // Output: Hello, welcome!

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Student extends Person {
  static studentCount = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount += 1;
    console.log(`Total students: ${Student.studentCount}`);
  }
}

const student3 = new Student("Charlie", 23, "S54321");
const student4 = new Student("Dave", 21, "S98765");

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person3 = new Person("Eve", "Smith", 30);
console.log(person3.fullName); // Output: Eve Smith

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person4 = new Person("Frank", "Johnson", 35);
person4.fullName = "George Brown";
console.log(person4.fullName); // Output: George Brown

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance");
    } else {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}, New Balance: ${this.#balance}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const account = new Account(1000);
account.deposit(500); // Output: Deposited: 500, New Balance: 1500
account.withdraw(200); // Output: Withdrew: 200, New Balance: 1300
account.withdraw(1500); // Output: Insufficient balance
