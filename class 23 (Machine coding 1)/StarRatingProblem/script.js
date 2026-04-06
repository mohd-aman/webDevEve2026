/*
    Design a star rating component that allows users to rate something using stars. 
    The component should display a visual representation of the rating using filled 
    and empty stars. Users can click on the stars to select a rating.
*/

const starRatingSection = document.getElementById('star-rating-section');
const stars = document.querySelectorAll('section span');

function updateUI(starValue) {
    for (let i = 0; i <= 4;i++) {
        i <= starValue - 1 ? stars[i].classList.add('filled') : stars[i].classList.remove('filled');
    }
}

starRatingSection.addEventListener('click', function (event) {
    if (event.target.nodeName !== 'SPAN') {
        return;
    }
    const ratingValue = event.target.getAttribute('data-rating');
    updateUI(ratingValue);
});

for (let star of stars) {
    // star.addEventListener('mouseenter', function () {
    //     const currValue = star.getAttribute('data-rating');
    //     updateUI(currValue);
    // });

    // star.addEventListener('mouseleave', function () {
    //     for (let star of stars) {
    //         if (star.classList.contains('filled')) {
    //             star.classList.remove('filled');
    //         }
    //     }
    // });
}



