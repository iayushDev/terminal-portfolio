const outputElement = document.getElementById("output");
const inputElement = document.getElementById("input");

const starterText = [
  "Hi, My Name is Ayush, This is a Linux Based Portfolio",
  "I Love Linux  🐧 and Web Development",
  "All Commands are resume , ls, social -a",
];

// Print starter text gradually with a delay
function printStarterText() {
  let delay = 1000;
  starterText.forEach((text) => {
    setTimeout(() => {
      appendToTerminal(text);
    }, delay);
    delay += 1000; // Adjust the delay here (1 second in this example)
  });
}

inputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleUserInput(inputElement.value);
    inputElement.value = ""; // Clear input after processing
  }
});

// Call the function to print the starter text
printStarterText();

function handleUserInput(input) {
  appendToTerminal(`$ <span class="command">${input}</span>`); // Display command with formatting

  if (input === "ls") {
    appendToTerminal(`All Commands are ls, resume , social -a}`, true);
  } else if (input === "resume") {
    redirectToResume();
  } else if (input === "social -a") {
    socialLink(); // Display social links
  } else {
    appendToTerminal(`${processCommand(input)}:  Command Not Found `, true);
  }
}

function redirectToResume() {
  window.location.href =
    "https://drive.google.com/u/0/uc?id=19iYTIl0gvQQL0Ujl2zvTypZ7XxUuqRgI&export=download";
}

function appendToTerminal(text, isOutput = false) {
  const newLine = document.createElement("div");
  newLine.classList.add(isOutput ? "output" : "input");
  newLine.innerHTML = text;
  newLine.style.fontFamily = "monospace";
  outputElement.appendChild(newLine);
  outputElement.scrollTop = outputElement.scrollHeight;
}

function processCommand(input) {
  // Process the input here and return the output
  // For this example, let's just return the input as it is
  return input;
}

function socialLink() {
  const links = [
    {
      name: "Github",
      link: "https://github.com/iayushDev",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/iayushDev/",
    },
  ];

  links.forEach((item) => {
    appendToTerminal(
      `<a style="color: white" href="${item.link}" target="_blank">${item.name}</a>`
    );
  });
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector("h1").onmouseover = (event) => {
  let iterations = 0;
  let interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })

      .join("");

    if (iterations >= event.target.dataset.value.length) {
      clearInterval(interval);
    }
    iterations += 1 / 3;
  }, 30);
};
