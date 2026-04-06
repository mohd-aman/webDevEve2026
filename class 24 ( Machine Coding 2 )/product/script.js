// const allProduct = document.querySelectorAll(".product");
// // attach eventListener to all product - 6

// const allCategory = document.querySelectorAll(".category");
// // attach eventListener to all category - 3

const categoriesEle = document.querySelector('#categories');

// attach eventListener to categories - 1

categoriesEle.addEventListener('click',function(e){
    const element = e.target;
  if(element.classList.contains("product")){
    console.log("clicked on product");
    const product = element.textContent;
    console.log(product);
    // console.log(element.parentNode.querySelector('h2'));
    // const category = element.parentNode.querySelector('h2').textContent;
    // console.log(category);
    const category = element.closest('.catory').querySelector('h2').textContent;
    console.log(category);
  }
})