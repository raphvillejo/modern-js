// Prototypal Inheritance

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio;
  }
  setName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

class Student extends Person {
  constructor(firstName, grade) {
    super(firstName);
    this.grade = grade;
  }

  getGrade() {
    const isPassing =
      this.grade > 70 ? "is passing the class" : "is failing the class";
    return isPassing;
  }

  setGrade(grade) {
    this.grade = grade;
  }

  updateGrade(grade) {
    this.grade = this.grade + grade;
  }
}

const student1 = new Student("Raph");
student1.setGrade(75);

console.log(student1.getGrade());

student1.updateGrade(-30);
console.log(student1.getGrade());

// const me = new Person("Andrew", "Mead", 27, ["Teaching", "Biking"]);
// me.setName("Alexis Turner");
// console.log(me.getBio());

// const person2 = new Person("Clancey", "Turner", 51);
// console.log(person2.getBio());
