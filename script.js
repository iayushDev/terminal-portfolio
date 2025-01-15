const outputElement = document.getElementById("output");
const inputElement = document.getElementById("input");

// Ensure focus on input when the terminal is clicked
document.querySelector("aside").addEventListener("click", () => {
  inputElement.focus();
});

const starterText = [
  "Hi, My Name is Ayush, This is a Linux-Based Portfolio",
  "I Love Linux 🐧 and Web Development",
  "All Commands are resume, ls, social -a, skills -a, about me",
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
  appendToTerminal(`$ <span class="text-green-400">${input}</span>`); // Display command with formatting

  if (input == "ls") {
    appendToTerminal(
      `All Commands are ls, about me, resume, social -a, skills -a`,
      true,
    );
  } else if (input == "resume") {
    redirectToResume();
  } else if (input == "social -a") {
    socialLink(); // Display social links
  } else if (input === "skills -a") {
    appendToTerminal(`Languages: JavaScript,Python,Rust,Lua, SQL`);

    appendToTerminal(`Frontend: React, HTML, CSS, JS, TS, TailwindCSS`);
    appendToTerminal(`Backend: NodeJS, ExpressJS, Python, Flask`);
    appendToTerminal(
      `IT Constructs & Tools: DSA, OOPs, Linux, Git, Docker, NeoVim, Postman`,
    );
    appendToTerminal(
      `Database & ORM's: MongoDB, Supabase,Firebase,  MySQL, Prisma, GraphQL`,
    );
  } else if (input == "about me") {
    appendToTerminal(
      `My Name is Ayush Mehrotra\nI Love Computer Technology\nI Love Web Development. My Expertise is in JS and its Frameworks.`,
    );
  } else if (input == "clear") {
    outputElement.innerHTML = ""; // Clear the terminal output
  } else {
    appendToTerminal(
      `${processCommand(input)}: <span class="text-red-700">Command Not Found </span > <br> 
        write 'ui' for better user experience

`,
      true,
    );
  }
}

function redirectToResume() {
  window.location.href =
    "https://drive.google.com/file/d/1OOZ7zVMmsqcEoiPKyuxVViRdWjNp1HAL/view?pli=1";
}

function appendToTerminal(text, isOutput = false) {
  const newLine = document.createElement("div");
  newLine.classList.add(isOutput ? "output" : "input");
  newLine.innerHTML = text;
  outputElement.appendChild(newLine);
  outputElement.scrollTop = outputElement.scrollHeight;
}

function processCommand(input) {
  return input; // Placeholder for processing commands
}

function socialLink() {
  const links = [
    { name: "GitHub", link: "https://github.com/mrayushmehrotra" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ayush-mehrotra-99419724b/",
    },
    { name: "Instagram", link: "https://www.instagram.com/mein.ayush.hoon/" },
  ];

  links.forEach((item) => {
    appendToTerminal(
      `<a class="text-blue-400" href="${item.link}" target="_blank">${item.name}</a>`,
    );
  });
}
