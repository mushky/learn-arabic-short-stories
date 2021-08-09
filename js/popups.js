/* Handle popups for translations */

function standardPopup(divId) {
  let popup = document.getElementById(`${divId}`)
  //popup.classList.toggle("show");
  popup.classList.add("show")
  setTimeout(() => {
    popup.classList.remove("show")
  },1500)
}