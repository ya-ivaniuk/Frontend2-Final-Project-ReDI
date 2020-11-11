const myBook = {
  status: "OK",
  copyright:
    "Copyright (c) 2019 The New York Times Company.  All Rights Reserved.",
  num_results: 28970,
  results: [
    {
      title: "#GIRLBOSS",
      description: "An online fashion retailer traces her path to success.",
      contributor: "by Sophia Amoruso",
      author: "Sophia Amoruso",
      contributor_note: "",
      price: 0,
      age_group: "",
      publisher: "Portfolio/Penguin/Putnam",
      isbns: [{ isbn10: "039916927X", isbn13: "9780399169274" }],
      ranks_history: [
        {
          primary_isbn10: "1591847931",
          primary_isbn13: "9781591847939",
          rank: 8,
          list_name: "Business Books",
          display_name: "Business",
          published_date: "2016-03-13",
          bestsellers_date: "2016-02-27",
          weeks_on_list: 0,
          ranks_last_week: null,
          asterisk: 0,
          dagger: 0,
        },
      ],
      reviews: [
        {
          book_review_link: "",
          first_chapter_link: "",
          sunday_review_link: "",
          article_chapter_link: "",
        },
      ],
    },
  ],
};

function fillInFiction() {
  console.log("hello from the function");
  //   for (let i = 0; i < 10; i++) {
  //     console.log("index: ", i);
  //     let title = myBook.results[i].title;
  //     console.log("title ", title);
  //   }
  myBook.results.forEach(function (book) {
    let fiction = document.getElementById("fictionCardDeck");
    let card = createCard(book.title, book.author, book.description);

    fiction.appendChild(card);
  });
}

function createCard(title, author, description) {
  let myCardElement = document.createElement("div");
  myCardElement.setAttribute("class", "card");
  myCardElement.innerHTML = `<img class="card-img-top" src="solidgrey.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text"><small class="text-muted">by ${author}</small></p>
        <p class="card-text">Description: ${description}</p>
      </div>`;
  return myCardElement;
}

fillInFiction();
