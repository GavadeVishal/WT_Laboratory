function showPopup(event) {
  event.preventDefault();
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.getElementById("studentForm").reset();
}


document.getElementById("overlay").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});