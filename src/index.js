function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Generating poem, please wait..."],
    autoStart: true,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
