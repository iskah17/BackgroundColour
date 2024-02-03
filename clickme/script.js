const button = document.querySelector("button")
const body = document.querySelector("body")
const colour = ['red', 'blue', 'pink', 'yellow', 'brown', 'green', 'violet', 'purple', 'acquamarine', 'grey', 'black', 'white']

body.style.backgroundColor = 'pink'
button.addEventListener('click', changeB)
function changeB() {
    const colorIndex = parseInt(Math.random() * colour.length)
    body.style.backgroundColor = colour[colorIndex]
}

// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }
// const years = [1990, 1967, 1989];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
