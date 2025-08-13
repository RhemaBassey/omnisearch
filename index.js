// document.getElementById("submit").addEventListener("click", (e) => {

// highlights clicked search-type only
function highlight(clickedSearchType) {
  document.querySelectorAll("li").forEach((li) => {
    li.style.color = "#1a1a1a";
  });
  clickedSearchType.style.color = "white";
}

let defaultSelection = document.querySelectorAll("li")[0];
let searchType = defaultSelection.dataset.value;
let searchTypeIndex = 0;

function searchEnginePartialURL(searchEngineName, index, input) {
  if (searchEngineName == "google") {
    let google = [
      "search?q=",
      "search?tbm=isch&q=",
      "search?tbm=vid&q=",
      "search?tbm=nws&q=",
    ];
    return google[index] + input;
  }
  if (searchEngineName == "bing") {
    let bing = [
      "search?q=", // Web
      "images/search?q=", // Images
      "videos/search?q=", // Videos
      "news/search?q=", // News
    ];
    return bing[index] + input;
  }
  if (searchEngineName == "duckduckgo") {
    let duckduckgo = [
      "", // Web
      "&iax=images&ia=images", // Images
      "&iax=videos&ia=videos", // Videos
      "&iar=news&ia=news", // News
    ];
    return "?q=" + input + duckduckgo[index];
  }
}

highlight(defaultSelection);
document.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", (e) => {
    highlight(li);
    searchType = li.dataset.value;
    searchTypeIndex = li.dataset.index;
  });
});

function midValue(searchEngine, searchTypeIndex) {
  return searchEngine[searchTypeIndex];
}

function runSearch() {
  let inputText = document.getElementById("inputText");
  console.log(searchType + "/" + inputText.value);

  let checkboxes = document
    .querySelector(".dropdown-content")
    .querySelectorAll("input");

  checkboxes.forEach((searchEngine) => {
    if (searchEngine.checked == true) {
      console.log(searchEngine.value);

      window.open(
        "https://www." +
          searchEngine.value +
          searchEnginePartialURL(
            searchEngine.dataset.name,
            searchTypeIndex,
            inputText.value
          ),
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
