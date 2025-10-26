const nav = document.getElementById("navigationsystem");
const links = nav.querySelectorAll("a");
const underline = nav.querySelector(".underline");

function moveUnderline(element) {
    const rect = element.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    underline.style.width = rect.width * 0.6 + "px"; // длина полоски ~60% текста
    underline.style.left = rect.left - navRect.left + rect.width * 0.2 + "px";
}

  // при загрузке
const active = nav.querySelector("a.active");
if (active) moveUnderline(active);

  // при клике
links.forEach(link => {
    link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    moveUnderline(link);
    });
});