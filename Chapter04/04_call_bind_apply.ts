export {}

class Person {
  public name: string
  public surname: string

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  public greet(city: string, country: string) {
    // we use the this operator to access name and surname
    let msg = `Hi, my name is ${this.name} ${this.surname}.`
    msg += `I'm from ${city} (${country}).`
    console.log(msg)
  }
}

const person = new Person("First", "Second")

person.greet("Seville", "Spain")

person.greet.call(person, "Some", "Shit")
person.greet.apply(person, ["Other", "Shit"])

// person.greet.call(null, "Seville", "Spain")
// person.greet.apply(null, ["Seville", "Spain"])

const valueOfThis: Omit<Person, "greet"> = {
  name: "Anakin",
  surname: "Skywalker",
}

person.greet.call(valueOfThis, "Mos espa", "Tatooine")
person.greet.apply(valueOfThis, ["Mos espa", "Tatooine"])
