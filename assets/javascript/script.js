function myFunction() {
  var x = document.getElementsByClassName("collapse");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}