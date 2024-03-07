"use strict";

const stoicism = async () => {
  $(".stoicism").empty();

  const article = await getRandomStoicQuote();

  $(".stoicism").append(article.author);
  $(".stoicism").append(`<div>${article.quote}</div>`);
};
const getRandomStoicQuote = async () => {
  const url = "https://stoic.tekloon.net/stoic-quote";
  const response = await fetch(url);
  return response.json();
};
