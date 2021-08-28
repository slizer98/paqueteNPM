// declaramos el arreglo
const messages = [
    "Erick", 
    "Manuel",
    "Paola",
    "Mauricio",
    "Diana",
    "Luz",
    "Victor",
    "Maria",
    "Daniela"
];

// creamos la funcion que nos enviara aleatoriamente mensajes de nuestro arreglo
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() *messages.length)];
    console.log(message)
};

// exportamos la funcion
module.exports = { randomMsg };