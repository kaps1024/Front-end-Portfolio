const buttons = document.querySelectorAll(".btn");
const digits = document.querySelectorAll(".digit");

const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");

let code = "";

const secretCode = "1998";


buttons.forEach(button => {
  button.addEventListener("click", () => {

    if(code.length < 4){

      code += button.innerText;

      updateDisplay();

    }

  });

});

function updateDisplay(){
  digits.forEach((digit, index) => {
    digit.innerText = code[index] || "—";
  });

}

updateDisplay();

openBtn.addEventListener("click", () => {

  if(code.length < 4){

    message.innerText = "Digite os 4 números.";
    message.className = "message error";

    return;

  }

  if(code === secretCode){

    message.innerText = "Código correto.";
    message.className = "message success";

  openDoor();

  }
  else{

    message.innerText = "Código incorreto.";
    message.className = "message error";

    code = "";
    updateDisplay();

  }

});

function openDoor(){

  const scene = document.createElement("div");

  scene.classList.add("door-scene");

  scene.innerHTML = `

    <div class="door-container">

      <div class="door left-door">
        <div class="handle"></div>
      </div>

      <div class="door right-door">
        <div class="handle"></div>
      </div>

    </div>

    <h2 class="final-text">PARABÉNS</h2>

  `;

  document.body.appendChild(scene);

  setTimeout(() => {
    scene.classList.add("open");
  }, 100);

}