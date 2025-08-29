const btn = document.getElementById("teaBtn");
const teaName = document.getElementById("tea");
const teaDesc = document.getElementById("desc");
const teaImage = document.getElementById("teaImage");

const teas = [
{ name: "Green Tea", desc: "Fresh, grassy, and full of antioxidants.", img: "images/green-tea.webp" },
{ name: "Black Tea", desc: "Bold, strong, and a classic morning brew.", img: "images/black-tea.webp" },
{ name: "Oolong Tea", desc: "A perfect balance between green and black.", img: "images/oolong-tea.jpg" },
{ name: "White Tea", desc: "Delicate, light, and naturally sweet.", img: "images/white-tea.webp" },
{ name: "Chamomile Tea", desc: "Relaxing floral tea, perfect before bed.", img: "images/chamonile-tea.webp" },
{ name: "Matcha", desc: "Bright green, earthy, and energizing.", img: "images/matcha-tea.jpg" },
{ name: "Chai", desc: "Spiced and warming, with cinnamon & cardamom.", img: "images/chai-tea.webp" },
{ name: "Jasmine Tea", desc: "Fragrant and calming with floral notes.", img: "images/jasmine-tea.png" },
{ name: "Peppermint Tea", desc: "Cool, refreshing, and soothing for digestion.", img: "images/peppermint-tea.webp" },
{ name: "Rooibos", desc: "Naturally caffeine-free with a nutty sweetness.", img: "images/rooibos-tea.webp" }
];
//I used ChatGPT to help me make quick descriptions of the different teas I wanted to include in this site

btn.addEventListener("click", () => {
    const randomTea = teas[Math.floor(Math.random() * teas.length)];
    teaName.textContent = randomTea.name;
    teaDesc.textContent = randomTea.desc;
    teaImage.src = randomTea.img;
    teaImage.alt = randomTea.name;

    // Cozy background
    const colors = ["#f4e1d2", "#e5d0b9", "#f2edd7", "#e8e4db", "#f6efe7"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Fade-in effect
    [teaName, teaDesc, teaImage].forEach(el => {
        el.classList.remove("show");
        setTimeout(() => el.classList.add("show"), 50);
    });
});