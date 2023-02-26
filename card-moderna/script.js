const container = document.querySelector(".card_container");
const cards = document.querySelectorAll(".card");

document.getElementById("left").addEventListener("click", function() {
  toPrevious()
})

document.getElementById("right").addEventListener("click", function() {
  toNext()
})

let current = 0;
let prev = 1;
let next = 2;

const toPrevious = () => {
  if (current > 0) {
    toSlide(current - 1)
  } else {
    toSlide(container.length - 1)
  }
}

const toNext = () => {
  if (current < cards.length - 1) {
    toSlide(current + 1)
  } else {
    toSlide(0)
  }
}

const toSlide = number => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active");
    cards[i].classList.remove("prev");
    cards[i].classList.remove("next");
  }

  if (next == cards.length) {
    next = 0;
  }

  if (prev == -1) {
    prev = cards.length - 1;
  }

  cards[current].classList.add("active");
  cards[prev].classList.add("prev");
  cards[next].classList.add("next");
}