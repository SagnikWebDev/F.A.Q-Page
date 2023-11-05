let currentsituation = false;
const data = [
  {
    Q: "Do You Accept All Major Credit Cards?",
    A: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, assumenda.",
  },
  {
    Q: "Do You Support Local Farmers?",
    A: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    Q: "Do You Use Organic Ingredients?",
    A: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias officia, debitis beatae placeat distinctio sequi.",
  },
];
const body = document.querySelector("body").style.ba;
document.addEventListener("click", (e) => {
  const targetElem = e.target.parentElement;
  if (targetElem.className == "btn") {
    const i = targetElem.firstElementChild;
    i.classList.toggle("rotate");
    const addContentSection =
      targetElem.parentElement.parentElement.lastElementChild;
    const addContentSectionQuestion =
      targetElem.parentElement.firstElementChild.innerText;
    const h2 = addContentSection.lastElementChild;
    addContentSection.classList.toggle("addContent");
    addContentSectionQuestion;
    const getAnswerFromData = data.filter(
      (val) => val.Q == addContentSectionQuestion
    );

    if (h2.id == "True") {
      setTimeout(() => {
        h2.innerText = "";
        h2.setAttribute("id", "");
      }, 300);
    } else {
      addContentSection.style.backgroundColor = "rgb(190, 157, 193)";
      setTimeout(() => {
        h2.setAttribute("id", "True");
        h2.appendChild(document.createTextNode(getAnswerFromData[0].A));
      }, 300);
    }
  }
});
console.log(data);
