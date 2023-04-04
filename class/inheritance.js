class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name}이(가) 소리를 냅니다.`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }

    speak() {
        console.log(`${this.name}이(가) 야옹하고 웁니다.`);
    }

    fetch() {
        console.log(`${this.name}이(가) 츄르를 먹습니다.`);
    }
}

const cat = new Cat("동글이");
cat.speak();
cat.fetch();
