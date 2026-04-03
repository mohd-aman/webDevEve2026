
// ------------------Bad Way of adding event

// const articles = document.querySelectorAll('article');

// for (let article of articles) {
//     article.addEventListener('click', function () {
//         console.log(article.innerText);
//     });
// }

const section = document.querySelector('section');

section.addEventListener('click', function (event) {
    if (event.target.nodeName !== 'ARTICLE') {
        // early exit
        return;
    }
    // console.log(event);
    console.log(event.target.innerText);
})