/* Code for Maha Keys Story Lesson */

const container = document.getElementById("story-container")
const dictionaryContainer = document.getElementById("dictionary-container")
const arrayOfDialogues = document.getElementById("dialog-group").children;
const dialogContainer = document.getElementById("dialog-group")
const continueButton = document.getElementById("continue")
const bottomArea = document.getElementById("bottom-area")
const progressBar = document.getElementById("progress-bar")
const titleImage = document.getElementById("story-title-image")

dictionaryContainer.style.display = "none"

// Variable to let us know where we are in the dialogue
let dialogCounter = 0;

// Initialize divs on load
function initialize() {
  for (let i = 1; i < arrayOfDialogues.length; i++) {
    arrayOfDialogues[i].style.visibility = "hidden";
  }
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

  titleImage.style.width = "25%"
  titleImage.style.height = "25%"
}

// Move to the next dialog or question
function nextItem() {
  if (dialogCounter <= arrayOfDialogues.length - 2) {
    dialogCounter += 1;

    incrementProgressBar()

    let nextDialog = arrayOfDialogues[dialogCounter]
    nextDialog.style.visibility = "visible"

    // Scroll down to latest dialog
    let dialogPos = nextDialog.getBoundingClientRect()

    // if (dialogPos.bottom > 600) {
    //   window.scrollTo(0, dialogPos.bottom - 60)
    // }

  } else {
    continueButton.innerHTML = "Finished!"
    continueButton.style.backgroundColor = "red"
  }

  checkForQuestion()
}

function checkForQuestion() {
  // 4 is where the first question is. TODO: come up with a better system for this.
  if (dialogCounter == 4) {
    continueButton.disabled = true
    continueButton.style.backgroundColor = "#efefef"
  }

  // 7 is where the first question is. TODO: come up with a better system for this.
  if (dialogCounter == 7) {
    continueButton.disabled = true
    continueButton.style.backgroundColor = "#efefef"
  }

  // 9 is where the second question is. TODO: come up with a better system for this.
  if (dialogCounter == 9) {
    continueButton.disabled = true
    continueButton.style.backgroundColor = "#efefef"
  }

  // 14 is where the third question is. TODO: come up with a better system for this.
  if (dialogCounter == 14) {
    continueButton.disabled = true
    continueButton.style.backgroundColor = "#efefef"
  }

  // 20 is where the forth question is. TODO: come up with a better system for this.
  if (dialogCounter == 20) {
    continueButton.disabled = true
    continueButton.style.backgroundColor = "#efefef"
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

  feedback.innerHTML = "! ممتاز"

  continueButton.disabled = false
  continueButton.style.display = "none"
  continueButton.style.backgroundColor = "#58CC02"

  bottomArea.style.backgroundColor = "#58CC02";

  setTimeout(() => {
    feedback.innerHTML = ""
    continueButton.style.display = "block"
    bottomArea.style.backgroundColor = "#fff";
  },1000)
}

function ouchFeedback() {
  let feedback = document.getElementById("feedback-text")

  feedback.innerHTML = "! خاطئ"
  continueButton.disabled = true
  continueButton.style.display = "none"

  bottomArea.style.backgroundColor = "#e74c3c"

  setTimeout(() => {
    feedback.innerHTML = ""
    continueButton.style.display = "block"
    bottomArea.style.backgroundColor = "#fff";
  },1000)
}

function incrementProgressBar() {
  let amountToIncrement = 100 / arrayOfDialogues.length;
  progressBar.value += amountToIncrement

  if (dialogCounter == arrayOfDialogues.length - 1) {
    progressBar.value = 100
  }
}

// Questions

function findKeysQuestion() {
  if (document.getElementById("yes-find-keys").checked) {
    awesomeFeedback();
  } else if (document.getElementById("no-find-keys").checked) {
    ouchFeedback();
  }
}

function whereAreMahasKeysQuestion() {
  if (document.getElementById("on-the-table").checked) {
    awesomeFeedback();
  } else if (document.getElementById("in-her-car").checked) {
    ouchFeedback();
  } else if (document.getElementById("on-her-bed").checked) {
    ouchFeedback();
  }
}

function whichWordMeansTired() {
  if (document.getElementById("tired").checked) {
    awesomeFeedback();
  } else if (document.getElementById("car").checked) {
    ouchFeedback();
  } else if (document.getElementById("donkey").checked) {
    ouchFeedback();
  }
}

function whatIsMahaLookingFor() {
  if (document.getElementById("looking-for-sugar").checked) {
    awesomeFeedback();
  } else if (document.getElementById("complaining-about-something").checked) {
    ouchFeedback();
  } else if (document.getElementById("looking-for-coffee").checked) {
    ouchFeedback();
  }
}

function mahaWasSoTiredSheDidWhatQuestion() {
  if (document.getElementById("put-salt-in-her-coffee").checked) {
    awesomeFeedback();
  } else if (document.getElementById("fell-asleep").checked) {
    ouchFeedback();
  } else if (document.getElementById("dropped-her-keys-in-the-coffee").checked) {
    ouchFeedback();
  }
}

// Handle Popups for translations
function standardPopup(divId) {
  let popup = document.getElementById(`${divId}`)
  //popup.classList.toggle("show");
  popup.classList.add("show")
  setTimeout(() => {
    popup.classList.remove("show")
  },1500)
}


function speakArabic(text) {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = 'ar-SA';
  window.speechSynthesis.speak(msg);
}


// Call initialize
initialize();