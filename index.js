document.getElementById("submit").addEventListener("click", (e)=>{
    e.preventDefault()
    let inputText = document.getElementById("inputText")
    let searchEngine = document.getElementById("searchEngine")
    console.log(searchEngine.value)
    window.open(searchEngine.value + inputText.value, "_blank", "noopener");
    // inputText.value =''
});