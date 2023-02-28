'use strict';

const colors = ['red', 'blue', 'green', 'yellow', 'black'];

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function handleClick(i) {
  const block = document.getElementById(`block-${i}`);
  block.textContent++;
  block.style.backgroundColor = randomColor();
}

for (let i = 0; i < 6; i++) {
  const block = document.createElement('div');
  block.id = `block-${i}`;
  block.className = 'block';
  block.textContent = '0';

  block.addEventListener('click', () => handleClick(i));

  document.body.appendChild(block);
}
