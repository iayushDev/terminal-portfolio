const outputElement = document.getElementById("output");
const inputElement = document.getElementById("input");

inputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleUserInput(inputElement.value);
    inputElement.value = ""; // Clear input after processing
  }
});

appendToTerminal(`Hi, My Name is Ayush, This is a Linux Based Portfolio`);
appendToTerminal("I Love Linux  🐧 and Web Development");
appendToTerminal("All Commands are resume , ls, social -a");

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
