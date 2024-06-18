const cardsData = [
  {
    image: "assets/김연희_한재민.svg",
    title: "우연한 만남이 시작되는 집 (2)",
    description: "[Knock & Talk] 김연희&한재민 인터뷰",
  },
  {
    image: "assets/김현수_전혜정.svg",
    title: "우연한 만남이 시작되는 집 (1)",
    description: "[Knock & Talk] 김현수&전혜정 인터뷰",
  },
  {
    image: "assets/김현수_전혜정.svg",
    title: "우연한 만남이 시작되는 집 (1)",
    description: "[Knock & Talk] 김현수&전혜정 인터뷰",
  },
  {
    image: "assets/김현수_전혜정.svg",
    title: "우연한 만남이 시작되는 집 (1)",
    description: "[Knock & Talk] 김현수&전혜정 인터뷰",
  },
];

const cardContainer = document.getElementById("card-container");

cardsData.map((card) => {
  const cardElement = document.createElement("div");
  cardElement.className = "card";

  cardElement.innerHTML = `
      <div class="card-image">
          <img src="${card.image}" alt="Card Image">
          <div class="card-button">
          </div>
      </div>
      <div class="card-content">
          <h2>${card.title}</h2>
          <p>${card.description}</p>
      </div>
  `;

  cardContainer.appendChild(cardElement);
});
