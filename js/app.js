function test() {
  alert("Dew it");
}

function wizard() {
  alert("I CAST TESTICULAR TORSION");
}

function addElement() {
  const input = document.getElementById("todoinput");
  const userInputValue = input.value;

  const listElement = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete Button";

  deleteButton.onclick = () => {
    listElement.remove();
  };

  const listContainer = document.getElementById("list");
  listElement.innerText = userInputValue;
  listElement.appendChild(deleteButton);
  listContainer.appendChild(listElement);
  listElement.className = "listElement";
  deleteButton.className = "deleteButton";
}

function deleteAllElements() {
  const listElements = document.getElementsByClassName("listElement");

  Array.from(listElements).forEach((listElement) => {
    listElement.remove();
  });
}

async function getWiki() {
  $(".wikipedia").empty();
  const url = "https://en.wikipedia.org/api/rest_v1/page/random/summary";
  const response = await fetch(url);
  const article = await response.json();
  $(".wikipedia").append(article.extract_html);
  const imageUrl = article.thumbnail.source;
  $(".wikipedia").append(`<img src="${imageUrl}"></img>`);
}
