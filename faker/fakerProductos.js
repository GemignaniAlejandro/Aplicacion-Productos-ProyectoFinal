const faker = require("faker");
faker.locale = "es";

const get = () => 
({
    nombre: faker.commerce.productName(),
    precio: faker.commerce.price(),
    foto: "https://picsum.photos/64/64"
}); 

module.exports = {get};