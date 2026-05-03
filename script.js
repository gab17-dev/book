const papers = document.querySelectorAll(".paper");
let current = 0;
const total = papers.length;

// initial stack order
papers.forEach((paper, i) => {
  paper.style.zIndex = total - i;
});

document.getElementById("next").onclick = () => {
  if (current < total) {
    const p = papers[current];

    p.classList.add("flipped");

    // wait for animation to finish EXACTLY
    const onEnd = () => {
      p.style.zIndex = 0;
      p.removeEventListener("transitionend", onEnd);
    };

    p.addEventListener("transitionend", onEnd);

    current++;
  }
};

document.getElementById("prev").onclick = () => {
  if (current > 0) {
    current--;

    const p = papers[current];

    p.style.zIndex = total - current;
    p.classList.remove("flipped");
  }
};
