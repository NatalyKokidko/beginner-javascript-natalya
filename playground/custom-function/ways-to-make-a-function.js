 /*console.log(docttorize2('Nataly'));
 
 const docttorize = function(firstName) {
    return `Dr. ${firstName}`;
 };
 function docttorize2(firstName) {
    return `Dr. ${firstName}`;
 }
*/

/*function inchToCM(inches) {
    return inches * 2.54;
    
}

const inchToCM = function(inches) {
    return inches * 2.54;
    
}

const inchToCM = (inches) => {
    return inches * 2.54;
    
}

const inchToCM = (inches) => { return inches * 2.54; };

const inchToCM = inches =>  inches * 2.54;

function add(a,b = 3) {
    const total = a + b;
    return total;
}

const add = (a, b = 3) => a + b;

function makeABaby(first, last) {
    const baby = {
    name: `${first} ${last}`,
    age: 0
}
return baby;
}

const makeABaby = function (first, last) {
    const baby = {
    name: `${first} ${last}`,
    age: 0
}
return baby;
}

const makeABaby =  (first, last)  => {
    const baby = {
    name: `${first} ${last}`,
    age: 0
}
return baby;
}*/

const makeABaby =  (first, last)  => ({name: `${first} ${last}`, age: 0 });

/*(function() {
    console.log('Running the Anon function');
    return 'You are cool';
})();*/

(function(age) {
    console.log('Running the Anon function');
    return `You are cool and age ${age}`;
})(100);

const wes = {
    name: "Wes Bos",
    sayHi: function() {
        console.log(`Hey ${this.name}`);
        return 'Hey Wes';
    },
    //Short hand Metod
   yellHi() {
    console.log('Hey Nataly');
   },
   // aroow function
   wisperHI: () => {
    console.log('hii wesss im a mouse');
}
}

//collback function
//click collback

const button = document.querySelector('.clickMe');

function handleClick() {
    console.log('GREAT CLICKING!!');
}


button.addEventListener('click', function() {
    console.log('Nice Job!');
});

// timer collback

setTimeout(() => {
    console.log('Done! Time to eat!');
}, 1000);
 