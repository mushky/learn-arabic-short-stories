/**
 * Script to handle Mahas Keys Lesson
 */

const container = document.getElementById("story-container")
const dictionaryContainer = document.getElementById("dictionary-container")
const arrayOfDialogues = document.getElementById("dialog-group").children;
const dialogContainer = document.getElementById("dialog-group")
const continueButton = document.getElementById("continue")
const bottomArea = document.getElementById("bottom-area")
const progressBar = document.getElementById("progress-bar")
const titleImage = document.getElementById("story-title-image")

// Initialize Dictionary to not be displayed on start up
dictionaryContainer.style.display = "none"

// Variable to let us know where we are in the dialogue
let dialogCounter = 0;

// Initialize divs on load
const initialize = () => {
  for (let i = 1; i < arrayOfDialogues.length; i++) {
    arrayOfDialogues[i].style.visibility = "hidden";
  }
  dialogContainer.style.display = "none"

  let continueButton = document.getElementById("continue");
  continueButton.style.display = "none"
}

// Start dialogue
const startDialogue = () => {
  let startButton = document.getElementById("start");
  startButton.style.display = "none"
  
  let continueButton = document.getElementById("continue");
  continueButton.style.display = "block"
  dialogContainer.style.display = "block"

  titleImage.style.width = "25%"
  titleImage.style.height = "25%"
}

// Move to the next dialog or question
const nextItem = () => {
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

// While I could add an id to each question html element, it would just add to the unreadability of the html.
const checkForQuestion = () => {
  // Questions at 4, 7, 9, 14, and 20
  if (dialogCounter == 4 || dialogCounter == 7 || dialogCounter == 9 || 
      dialogCounter == 14 || dialogCounter == 20) 
  {
    continueButton.disabled = true
    continueButton.style.backgroundColor = "#efefef"
  }
}

// Dictionary Toggle
const dictionaryToggle = () => {
  if (dictionaryContainer.style.display == "none") {
    dictionaryContainer.style.display = "block"
    container.style.display = "none"
  } else {
    dictionaryContainer.style.display = "none"
    container.style.display = "block"
  }
}

// Functions related to questions.
const awesomeFeedback = () => {
  let feedback = document.getElementById("feedback-text")

  feedback.innerHTML = "! ??????????"

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

const ouchFeedback = () => {
  let feedback = document.getElementById("feedback-text")

  feedback.innerHTML = "! ????????"
  continueButton.disabled = true
  continueButton.style.display = "none"

  bottomArea.style.backgroundColor = "#e74c3c"

  setTimeout(() => {
    feedback.innerHTML = ""
    continueButton.style.display = "block"
    bottomArea.style.backgroundColor = "#fff";
  },1000)
}

const incrementProgressBar = () => {
  let amountToIncrement = 100 / arrayOfDialogues.length;
  progressBar.value += amountToIncrement

  if (dialogCounter == arrayOfDialogues.length - 1) {
    progressBar.value = 100
  }
}

// Questions
const findKeysQuestion = () => {
  if (document.getElementById("yes-find-keys").checked) {
    awesomeFeedback();
  } else if (document.getElementById("no-find-keys").checked) {
    ouchFeedback();
  }
}

const whereAreMahasKeysQuestion = () => {
  if (document.getElementById("on-the-table").checked) {
    awesomeFeedback();
  } else if (document.getElementById("in-her-car").checked) {
    ouchFeedback();
  } else if (document.getElementById("on-her-bed").checked) {
    ouchFeedback();
  }
}

const whichWordMeansTired = () => {
  if (document.getElementById("tired").checked) {
    awesomeFeedback();
  } else if (document.getElementById("car").checked) {
    ouchFeedback();
  } else if (document.getElementById("donkey").checked) {
    ouchFeedback();
  }
}

const whatIsMahaLookingFor = () => {
  if (document.getElementById("looking-for-sugar").checked) {
    awesomeFeedback();
  } else if (document.getElementById("complaining-about-something").checked) {
    ouchFeedback();
  } else if (document.getElementById("looking-for-coffee").checked) {
    ouchFeedback();
  }
}

const mahaWasSoTiredSheDidWhatQuestion = () => {
  if (document.getElementById("put-salt-in-her-coffee").checked) {
    awesomeFeedback();
  } else if (document.getElementById("fell-asleep").checked) {
    ouchFeedback();
  } else if (document.getElementById("dropped-her-keys-in-the-coffee").checked) {
    ouchFeedback();
  }
}

initialize();
