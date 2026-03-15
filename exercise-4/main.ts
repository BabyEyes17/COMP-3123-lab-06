import { Customer } from "./customer";

let customer = new Customer("Jayden", "Lewis", 20);
customer.greeter()
console.log(`You are ${customer.getAge()} years old`)
