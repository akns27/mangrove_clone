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
    image: "assets/맹그로브_놀이터.svg",
    title: "왜 DDP에 놀이터를 만들었을까?",
    description: "[POP-UP] 모여라! 맹그로브 놀이터, 프로젝트 비하인드",
  },
  {
    image: "assets/맹그로브_아트디렉터.svg",
    title: "재밌는 개성으로 빛나는 도시, 서울!",
    description: "<뽀빠이>매거진 아트티렉터 Taro Kambe 인터뷰",
  },
];

const cardContainer = document.getElementById("card_container");

cardsData.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.className = "card";

  cardElement.innerHTML = `
      <div class="card-image">
          <img src="${card.image}" alt="Card Image">
          <div class="card-button">
          </div>
      </div>
      <div class="card-content">
          <h2 class="card-title">${card.title}</h2>
          <p class="card-description">${card.description}</p>
      </div>
  `;

  cardContainer.appendChild(cardElement);
});