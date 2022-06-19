const buttons = document.querySelectorAll(".project-selector-button");
const projects = document.querySelectorAll(".project-item");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    buttons.forEach(button => {
      button.classList.remove("active-button");
    })
    e.target.classList.add("active-button");
    projects.forEach(project => {
      let type = project.querySelector(".project-text").innerText;
      if (type == e.target.innerText || e.target.innerText == "Все") {
        project.classList.remove("invisible");
      }
      else {
        project.classList.add("invisible");
      }
    })
  })
})