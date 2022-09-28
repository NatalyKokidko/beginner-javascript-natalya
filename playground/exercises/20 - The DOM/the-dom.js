/*function init() {
const p = document.querySelector('p');
console.log(p);
}
document.addEventListener('DOMContentLoaded', init);

const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
console.log(p);
console.log(divs);

const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');
console.log(heading.textContent);
console.log(heading.innerText);
/*heading.textContent = 'Wes is cool';
console.log(heading.textContent);
console.log(heading.textContent);
console.log(heading.innerText);
console.log(heading.outerHTML);
console.log(heading.innerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

pizzaList.insertAdjacentText('beforebegin', 'pizza');
pizzaList.insertAdjacentText('afterbegin', 'pizza');
pizzaList.insertAdjacentText('afterend', 'pizza');
pizzaList.insertAdjacentText('beforeend', 'pizza');*/

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');

console.log(pic.classList);


function toggleRound() {
    pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup';

console.log(pic.alt);
console.log(pic.naturalWidth);

pic.addEventListener('load', function() {
    console.log(pic.naturalWidth);
})

pic.width = 200;
// pic.setAttribute('alt', 'REALLY CUTE PUP');
// console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
    alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});