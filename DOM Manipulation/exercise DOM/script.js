var ul = document.querySelector("ul");

ul.addEventListener("click", function() {
  if(ul.children === "LI") {
    ul.children.classList.add("done")
  }
})

