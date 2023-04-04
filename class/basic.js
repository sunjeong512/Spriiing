// 클래스
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`안녕하세요, ${this.age}살 입니다.`);
    }

    sayMyName() {
        console.log(`제 이름은 ${this.name}입니다.`)
    }
  }
  
 // 객체는 여러개 생성할 수 있고, 각각의 개체는 다 다른 존재인 것임.
  const person1 = new Person("Kim", 21);
  console.log(person1.name);
  person1.sayHello();
  
  const person2 = new Person("Jeong", 22);
  console.log(person2.age);
  person2.sayMyName();