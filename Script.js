let table = document.querySelector("table");

table.addEventListener("click", function(event) {
  if (event.target.tagName == "TD") {
    let td = event.target;
    if (td.classList.contains("completed")) {
      td.classList.remove("completed");
    } else {
      td.classList.add("completed");
      td.classList.remove("failed");
    }
  }
