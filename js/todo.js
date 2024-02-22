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
