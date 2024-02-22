async function getWiki() {
  $(".wikipedia").empty();

  const article = await getRandomWikiPage();

  $(".wikipedia").append(article.extract_html);
  const imageUrl = article.thumbnail.source;
  $(".wikipedia").append(`<img src="${imageUrl}"></img>`);
}

async function getRandomWikiPage() {
  const url = "https://en.wikipedia.org/api/rest_v1/page/random/summary";
  const response = await fetch(url);
  return response.json();
}

async function searchWiki(query) {
  const url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search=${query}&namespace=0&limit=3&formatversion=2`;
  const response = await fetch(url);
  return response.json();
}

async function wikiSearch() {
  const input = $(".wikiSearchInput");
  const userInputValue = input.val();

  const apiResponse = await searchWiki(userInputValue);

  const finalList = [];

  apiResponse[1].forEach((title, index) => {
    const newObject = {
      title: title,
      url: apiResponse[3][index],
    };

    finalList.push(newObject);
  });

  $(".wikipedia").empty();
  $(".wikipedia").append(`<ol class="listOfResults"></ol>`);

  finalList.forEach((object) => {
    addToPage(object);
  });
}

function addToPage(object) {
  const title = object.title;
  const url = object.url;

  $(".listOfResults").append(`
      <li>
        <a href=${url}>${title}</a>
      </li>
    `);
}
