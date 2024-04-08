function submit_message_handler() {
  // Seleziona l'elemento input
  const input_message = document.querySelector("#input_message");
  // Seleziona il div di destinazione
  const divDestinazione = document.querySelector("#container");
  // Ottieni il testo dall'input
  const testoDaTagliare = input_message.value;

  // Taglia il testo dall'input
  input_message.value = "";

  // Crea un nuovo div
  const nuovoDiv = document.createElement("div");
  // Assegna il testo tagliato al nuovo div
  nuovoDiv.textContent = testoDaTagliare;
  // Aggiungi il nuovo div al contenitore
  nuovoDiv.classList.add("left");
  container.appendChild(nuovoDiv);
  //chiama la funzione per la risposta del bot
  answer();
}

function reset_images() {
  const guy1 = document.querySelector("#guy1");
  const speaking_guy1 = document.querySelector("#speaking_guy1");
  guy1.classList.remove("hidden");
  speaking_guy1.classList.add("hidden");
  const guy2 = document.querySelector("#guy2");
  const speaking_guy2 = document.querySelector("#speaking_guy2");
  guy2.classList.remove("hidden");
  speaking_guy2.classList.add("hidden");
  const guy3 = document.querySelector("#guy3");
  const speaking_guy3 = document.querySelector("#speaking_guy3");
  guy3.classList.remove("hidden");
  speaking_guy3.classList.add("hidden");
}

function answer() {
  reset_images();
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    const guy1 = document.querySelector("#guy1");
    const speaking_guy1 = document.querySelector("#speaking_guy1");
    guy1.classList.add("hidden");
    speaking_guy1.classList.remove("hidden");
  } else if (randomNumber == 1) {
    const guy2 = document.querySelector("#guy2");
    const speaking_guy2 = document.querySelector("#speaking_guy2");
    guy2.classList.add("hidden");
    speaking_guy2.classList.remove("hidden");
  } else if (randomNumber == 2) {
    const guy3 = document.querySelector("#guy3");
    const speaking_guy3 = document.querySelector("#speaking_guy3");
    guy3.classList.add("hidden");
    speaking_guy3.classList.remove("hidden");
  }
  sendMessage(randomNumber);
}
function sendMessage(randomNumber) {
  const container = document.querySelector("#container");
  const newDiv = document.createElement("div");
  const username = document.createElement("div");
  const bot_answer = document.querySelector("#bot_answer");
  if (randomNumber == 0) {
    bot_answer.textContent = "Ciao, posso aiutarti?";
    bot_answer.classList.remove("hidden");
    newDiv.textContent = "Ciao, posso aiutarti?";
    username.textContent = "Bot1";
  } else if (randomNumber == 1) {
    bot_answer.textContent = "Come posso aiutarti?";
    bot_answer.classList.remove("hidden");
    newDiv.textContent = "Come posso aiutarti?";
    username.textContent = "Bot2";
  } else if (randomNumber == 2) {
    bot_answer.textContent = "Di cosa hai bisogno?";
    bot_answer.classList.remove("hidden");
    newDiv.textContent = "Di cosa hai bisogno?";
    username.textContent = "Bot3";
  }
  newDiv.classList.add("right");
  username.classList.add("right");
  username.classList.add("username");
  container.appendChild(newDiv);
  newDiv.appendChild(username);
}

function enter_message_handler(event) {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    submit_message_handler();
  }
}
//Bottone per inviare i messaggi nelle varie classi
const submit_message = document.querySelector("#submit_message");
const input_message = document.querySelector("#input_message");
submit_message.addEventListener("click", submit_message_handler);
input_message.addEventListener("keypress", enter_message_handler);
