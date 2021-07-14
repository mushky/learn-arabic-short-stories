const dictionaryContainer = document.getElementById("dictionary-container")
const container = document.getElementById("story-container")
const arrayOfDialogues = document.getElementById("dialog-group").children;
const dialogContainer = document.getElementById("dialog-group")
const continueButton = document.getElementById("continue")
dictionaryContainer.style.display = "none"

let dialogCounter = 0;

// Initialize divs on load
function initialize() {
  dialogContainer.style.display = "none"

  let continueButton = document.getElementById("continue");
  continueButton.style.display = "none"

}

// Start dialogue
function startDialogue() {
  let startButton = document.getElementById("start");
  startButton.style.display = "none"
  let continueButton = document.getElementById("continue");
  
  continueButton.style.display = "block"
  dialogContainer.style.display = "block"

  for (let i = 1; i < arrayOfDialogues.length; i++) {
    arrayOfDialogues[i].style.visibility = "hidden";
  }
}

// Move to the next dialog or question
function nextItem() {
  if (dialogCounter <= arrayOfDialogues.length - 2) {
    dialogCounter += 1;

    let nextDialog = arrayOfDialogues[dialogCounter]
    nextDialog.style.visibility = "visible"

    // Scroll down to latest dialog
    let dialogPos = nextDialog.getBoundingClientRect()
    if (dialogPos.top > 500) {
      window.scrollTo(dialogPos.left, dialogPos.top - 100)
    }

  } else {
    continueButton.innerHTML = "Next Story!"
    continueButton.style.backgroundColor = "red"
  }
  // 4 is where the first question is. TODO: come up with a better system for this.
  if (dialogCounter == 4) {
    continueButton.disabled = true
  }
}


// Dictionary Toggle
function dictionaryToggle(){
  if (dictionaryContainer.style.display == "none") {
    dictionaryContainer.style.display = "block"
    container.style.display = "none"
  } else {
    dictionaryContainer.style.display = "none"
    container.style.display = "block"
  }
}

// Functions related to questions.
function awesomeFeedback() {
  let feedback = document.getElementById("feedback-text")

  feedback.innerHTML = "AWESOME!"
  continueButton.disabled = false
  setTimeout(() => {
    feedback.innerHTML = ""
  },2000)
}

function ouchFeedback() {
  let feedback = document.getElementById("feedback-text")
  let continueButton = document.getElementById("continue")

  feedback.innerHTML = "OUCH try again!"
  continueButton.disabled = true
  setTimeout(() => {
    feedback.innerHTML = ""
  },2000)
}

function findKeysQuestion() {
  if (document.getElementById("yes-find-keys").checked) {
    awesomeFeedback();
  } else if (document.getElementById("no-find-keys").checked) {
    ouchFeedback();
  }
}

// Pop up translations (Right now every translation requires its own function. Luckily they are easy to write.)
function goodMorningPopup() {
  let popup = document.getElementById("goodMorningPopup");
  popup.classList.toggle("show");
}

function whereAreMyKeysPopup() {
  let popup = document.getElementById("whereAreMyKeysPopup");
  popup.classList.toggle("show");
}

function yourKeysPopup() {
  let popup = document.getElementById("yourKeysPopup");
  popup.classList.toggle("show");
}

function iNeedThemForWorkPopup() {
  let popup = document.getElementById("iNeedThemForWorkPopup");
  popup.classList.toggle("show");
}

function iNeedMyCarKeys() {
  let popup = document.getElementById("iNeedMyCarKeys");
  popup.classList.toggle("show");
}

// Call initialize
initialize();