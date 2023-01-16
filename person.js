class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getInfo() {
        return this.id + "-" + this.name;
    }
}
export default Person;

