"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var customer = new customer_1.Customer("Jayden", "Lewis", 20);
customer.greeter();
console.log("You are ".concat(customer.getAge(), " years old"));
