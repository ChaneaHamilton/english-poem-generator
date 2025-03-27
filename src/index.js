function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cusor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let apiKey = "aatbf0c2od53d41737ca6d7d30e64b01";
  let instructionsInput = document.querySelector("#user-instructions");
  let context =
    "You are a very helpful AI assistant and you provide short poems. Display poem in basic html. Don't show html when displaying poem. Make sure to follow the user instructions below.";
  let prompt = `User instructions are: please provide a short poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `⏳ Generating your poem about ${instructionsInput.value}...`;
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
