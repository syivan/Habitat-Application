let inventory = [];

let hammer1 = {
    name: "Baxter 2",
    model: "B1S",
    cost: 49,
    quantity: 25
};

let tv3 = {
    name: "Smasung OLED 44 inch",
    model: "S12G",
    cost: 450,
    quantity: 12
};

let pencil4 = {
    name: "0.5 pencil",
    model: "PDWE23",
    cost: 2.99,
    quantity: 434
};

inventory.splice(0,0, hammer1, tv3, pencil4);

console.log(inventory);

let itemToRetrieve = inventory[1];
console.log(itemToRetrieve);

let mouse5 = {
    name: "Deathadder Pro",
    model: "V3",
    cost: 150,
    quantity: 4
};

inventory.splice(0, 0, mouse5);

console.log(inventory.length);

inventory.length = 0;
console.log(inventory[0]);