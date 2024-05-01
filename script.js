const content = document.querySelector(".content");
console.log(content);
const digitalClock = new Date();

let newClock = digitalClock.toLocaleTimeString();

console.log(newClock);

setInterval(() => {
  const digitalClock = new Date();
  let newClock = digitalClock.toLocaleTimeString();
  console.log(newClock);
  const date = new Date().toDateString();
  console.log(date);
  content.innerHTML = `<p>${newClock}</p>
    <h6>${date}</h6>
    `;
}, 1000);
