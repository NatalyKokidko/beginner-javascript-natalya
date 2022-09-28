const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute pup <img onload="alert('HELLO')" src="https://picsum.photos/100"/>`;
const myHTML = `
<div className="wrapper">
<h2>Cute ${desc}</h2>
<img src="${src}" alt="${desc}"/>
</div>
`;

const myFragment = document.createRange()
.createContextualFragment(myHTML);

console.log(myFragment.querySelector('img'));
console.log(myFragment);

document.body.appendChild(myFragment);