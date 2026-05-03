const papers = document.querySelectorAll(".paper");
let current = 0;
const total = papers.length;

// set initial stack
papers.forEach((paper, i) => {
  paper.style.zIndex = total - i;
});

document.getElementById("next").onclick = () => {
  if (current < total) {
    const p = papers[current];

    p.classList.add("flipped");

    setTimeout(() => {
      p.style.zIndex = 0;
    }, 1000);

    current++;
  }
};

document.getElementById("prev").onclick = () => {
  if (current > 0) {
    current--;

    const p = papers[current];

    p.classList.remove("flipped");
    p.style.zIndex = total - current;
  }
};
