// WRITE YOUR CODE IN HERE:



for (let i = 0; i < 100; i++) {
  const button = document.createElement('button'); button.innerText = 'Hello World!';
  button.style.backgroundColor = 'orange';
  button.style.width = '71px';
  button.style.borderRadius = '10px';
  button.style.margin = '3px';
  document.querySelector('#container').appendChild(button);
}