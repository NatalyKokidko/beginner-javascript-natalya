/*function calculateBill() {
    console.log('Running Calculate Bill!!');
    const total = 100 * 1.13;
    return total;
}
//calculateBill();
const myTotal = calculateBill();
//console.log(`Your Total is $${myTotal}`);  
console.log(`Your total is $${calculateBill()}`);

let bill = 100;
const taxRate = 0.13;

function calculateBill() {
    console.log('Running Calculate Bill!!');
    const total = bill * 1 + taxRate;
    return total;
}
const myTotal = calculateBill();
bill = 200;
//console.log(`Your total is $${calculateBill()}`);
const myTotal2 = calculateBill();
console.log(myTotal, myTotal2);

function calculateBill(billAmount, taxRate)  {
    console.log('Running Calculate Bill!!');
    const total = billAmount * 1 + taxRate;
    return total;
}
const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);
console.log(myTotal, myTotal2);

function calculateBill(billAmount, taxRate)  {
    console.log (billAmount, taxRate);
    console.log('Running Calculate Bill!!');
    const total = billAmount * 1 + taxRate;
    return total;
}
const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotal = calculateBill(wesTotal, wesTaxRate);

const firstName = 'Nataly';
function sayHiTo() {
    return `Hello ${firstName}`;
}
const greeting = sayHiTo();
console.log(greeting);*/

function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}
//const greeting = sayHiTo('Nataly');
//console.log(greeting);

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15)  {

    console.log('Running Calculate Bill!!');
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
}

// 
const wesTotal = 500;
const wesTaxRate = 0.3;

const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);

function doctorize(name) {
    return `Dr. ${name}`;
}
//function yell(name) {
   // return `Hey ${name.toUpperCase()}`;
//}
//yell(doctorize('Nataly'))

function yell(name = 'Goose') {
    return `Hey ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, 0.2);
console.log(myBill4);
