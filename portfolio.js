let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letters) => {
        let span = document.createElement("span");
        span.textContent = letters;
        span.className = "letter";
        word.append(span);
    })
});
let currentwordindex = 0;
let maxwordindex = words.length - 1;
words[currentwordindex].style.opacity = "1";

let changetext = () => {
    let currentword = words[currentwordindex];
    let nextword = currentwordindex === maxwordindex ? words[0] : words[currentwordindex + 1];
    Array.from(currentword.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextword.style.opacity = "1";
    Array.from(nextword.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 304 + i * 80);
    });
    currentwordindex = currentwordindex === maxwordindex ? 0 : currentwordindex + 1;
};
changetext();
setInterval(changetext, 3000);


const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;


    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate }deg "></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add("marked")
    }

})

var mixer = mixitup('.portfolio-gallery');



let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');





function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll,activeMenu");


const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky,window.scrollY>50")

})