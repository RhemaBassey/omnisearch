// document.getElementById("submit").addEventListener("click", (e) => {

function runSearch() {
  let inputText = document.getElementById("inputText");
  console.log(inputText.value);

  let checkboxes = document
    .querySelector(".dropdown-content")
    .querySelectorAll("input");

  checkboxes.forEach((searchEngine) => {
    if (searchEngine.checked == true) {
      console.log(searchEngine.value);
      window.open(
        "https://www." + searchEngine.value + inputText.value,
        "_blank",
        "noopener"
      );
    }
  });
}

document.getElementById("submit").addEventListener("click", runSearch);

document.getElementById("inputText").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // stop form submission if inside a form
    runSearch();
  }
});

const dropdown = document.getElementById("dropdown");
const btn = dropdown.querySelector(".dropdown-icon");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("show");
});

// Optional: close dropdown if clicking outside
window.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});
