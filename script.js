const cart = document.getElementsByClassName("shop-image");
const getFirstCart = cart[0];
const cartMenu = document.getElementsByClassName("cart-menu");
const getFirstMenu = cartMenu[0];
const realClose = document.getElementById("close");
const numberZero = document.getElementsByClassName("zero");
const zero = numberZero[0];
const clickMinus = document.getElementsByClassName("minus");
const clickPlus = document.getElementsByClassName("plus");
const minus = clickMinus[0];
const plus = clickPlus[0];
const gettingButton = document.getElementsByClassName("button");
const button = gettingButton[0];
const bigProducts = document.getElementsByClassName("big-products");
const smallProducts = document.getElementsByClassName("small-products");
const specialImage = document.getElementsByClassName("special");
const bigProductDiv = document.getElementById("father-div");
const smallProductDiv = document.getElementsByClassName("father-div-2")
const moreBorders = document.getElementsByClassName("divs");
const moreBordersBro = document.getElementsByClassName("divs1");
const hoverItems = document.getElementsByClassName("hover-items");
const gettinglittleShopCircle = document.getElementsByClassName("circle");
const littleShopCircle = gettinglittleShopCircle[0];
const gettingCartWhenEmptyDescription = document.getElementsByClassName("cart-description-p");
const cartWhenEmptyDescription = gettingCartWhenEmptyDescription[0];
const gettingCartWhenFullDescription = document.getElementsByClassName("boughtHeader");
const cartWhenFullDescription = gettingCartWhenFullDescription[0];
const gettingCheckoutButton = document.getElementsByClassName("lastButton");
const checkoutButton = gettingCheckoutButton[0];

const gettingSpecialNumber = document.getElementsByClassName("specialNumber");
const specialNumber = gettingSpecialNumber[0];
const gettingTotal = document.getElementsByClassName("total");
const total = gettingTotal[0];
const deleteTrash = document.getElementsByClassName("delete");



const gettinglittlePic = document.getElementsByClassName("littlePic");
const littlePic = gettinglittlePic[0];

const gettingNextButton = document.getElementsByClassName("circleNext");
const nextButton = gettingNextButton[0];
const gettingPreviousButton = document.getElementsByClassName("circlePrevious");
const previousButton = gettingPreviousButton[0];

const gettingEasyCarousel = document.getElementsByClassName("images");
const easyCarousel = gettingEasyCarousel[0];

const anotherPairShoes = document.getElementsByClassName("divs1");

let prevSelectedBox = null;
let anotherForBorder = null;
// carousel

const carousel = document.getElementsByClassName("carousel");
const carouselBigItems = document.getElementsByClassName("carousel-big-items ");
const carouselSmallItems = document.getElementsByClassName("carousel-small-items")
const overlay = document.getElementsByClassName("overlay");
const closeX = document.getElementsByClassName("close-btn");


const gettingLastDiv = document.getElementsByClassName("theLast-div-2");
const lastDiv = gettingLastDiv[0];

let counter = 0;

nextButton.addEventListener("click", function () {
  counter++;
  if (counter > carouselSmallItems.length - 1) counter = 0;

  var newImage1 = document.createElement("img");
  newImage1.src = carouselBigItems[counter].src;
  newImage1.style.width = '100%';
  newImage1.style.height = '60vh';
  newImage1.style.position = 'absolute';
  newImage1.style.top = '5%';
  newImage1.style.borderRadius = '10px';
  newImage1.style.display = 'block';
  newImage1.style.zIndex = "21";

  bigCarousel.appendChild(newImage1);


  if (prevSelectedCarousel && anotherForCarouselBorders) {
    prevSelectedCarousel.classList.remove("opacity");
    prevSelectedCarousel.classList.remove("anotherRevealed2");
    anotherForCarouselBorders.classList.remove("anotherRevealed");
  }
  // Add selected class to clicked box
  carouselSmallItems[counter].classList.add("opacity");
  carouselSmallItems[counter].classList.add("anotherRevealed2")
  moreBordersBro[counter].classList.add("anotherRevealed");


  // Update previously selected box
  prevSelectedCarousel = carouselSmallItems[counter];
  anotherForCarouselBorders = moreBordersBro[counter];



})
previousButton.addEventListener("click", function () {
  if (counter <= 0) {
    counter = carouselSmallItems.length - 1
  } else {
    counter--;
  }

  var newImage1 = document.createElement("img");
  newImage1.src = carouselBigItems[counter].src;
  newImage1.style.width = '100%';
  newImage1.style.height = '60vh';
  newImage1.style.position = 'absolute';
  newImage1.style.top = '5%';
  newImage1.style.borderRadius = '10px';
  newImage1.style.display = 'block';
  newImage1.style.zIndex = "21";

  bigCarousel.appendChild(newImage1);


  if (prevSelectedCarousel && anotherForCarouselBorders) {
    prevSelectedCarousel.classList.remove("opacity");
    prevSelectedCarousel.classList.remove("anotherRevealed2");
    anotherForCarouselBorders.classList.remove("anotherRevealed");
  }
  // Add selected class to clicked box
  carouselSmallItems[counter].classList.add("opacity");
  carouselSmallItems[counter].classList.add("anotherRevealed2")
  moreBordersBro[counter].classList.add("anotherRevealed");


  // Update previously selected box
  prevSelectedCarousel = carouselSmallItems[counter];
  anotherForCarouselBorders = moreBordersBro[counter];



})

for (let i = 0; i < smallProducts.length; i++) {
  function clickSmallProduct() {
    counter = i;
    var newImage = document.createElement("img");
    newImage.src = bigProducts[i].src;
    newImage.style.width = '50vh';
    newImage.style.height = '50vh';
    newImage.style.position = 'absolute';
    newImage.style.left = '14vw';
    newImage.style.top = '25vh';
    newImage.style.borderRadius = '10px';
    newImage.style.display = 'block';
    bigProductDiv.appendChild(newImage);

    if (prevSelectedBox && anotherForBorder) {
      prevSelectedBox.classList.remove("opacity");
      anotherForBorder.classList.remove("anotherRevealed");
    }
    // Add selected class to clicked box
    smallProducts[i].classList.add("opacity");
    moreBorders[i].classList.add("anotherRevealed");


    // Update previously selected box
    prevSelectedBox = smallProducts[i];
    anotherForBorder = moreBorders[i];

    // for Carousel
    // carouselSmallItems[i].classList.add("opacity");
    // carouselSmallItems[i].classList.add("anotherRevealed");
  }
  smallProducts[i].addEventListener("click", clickSmallProduct);
}

const bigCarousel = document.getElementById("carousel-big");
let prevSelectedCarousel = null;
let anotherForCarouselBorders = null;

for (let j = 0; j < carouselSmallItems.length; j++) {
  function clickSmallCarouselProduct() {
    counter = j;
    var newImage1 = document.createElement("img");
    newImage1.src = carouselBigItems[j].src;
    newImage1.style.width = '100%';
    newImage1.style.height = '60vh';
    newImage1.style.position = 'absolute';
    newImage1.style.top = '5%';
    newImage1.style.borderRadius = '10px';
    newImage1.style.display = 'block';
    newImage1.style.zIndex = "21";

    bigCarousel.appendChild(newImage1);


    if (prevSelectedCarousel && anotherForCarouselBorders) {
      prevSelectedCarousel.classList.remove("opacity");
      prevSelectedCarousel.classList.remove("anotherRevealed2");
      anotherForCarouselBorders.classList.remove("anotherRevealed");
    }
    // Add selected class to clicked box
    carouselSmallItems[j].classList.add("opacity");
    carouselSmallItems[j].classList.add("anotherRevealed2")
    moreBordersBro[j].classList.add("anotherRevealed");


    // Update previously selected box
    prevSelectedCarousel = carouselSmallItems[j];
    anotherForCarouselBorders = moreBordersBro[j];
  }
  carouselSmallItems[j].addEventListener("click", clickSmallCarouselProduct);
  hoverItems[j].addEventListener("click", clickSmallCarouselProduct);
}



for (let i = 0; i < smallProducts.length; i++) {
  function clickSmallCarouselProductAgain() {
    counter = i;
    var newImage1 = document.createElement("img");
    newImage1.src = carouselBigItems[i].src;
    newImage1.style.width = '100%';
    newImage1.style.height = '60vh';
    newImage1.style.position = 'absolute';
    newImage1.style.top = '5%';
    newImage1.style.borderRadius = '10px';
    newImage1.style.display = 'block';
    newImage1.style.zIndex = "21";

    bigCarousel.appendChild(newImage1);


    if (prevSelectedCarousel && anotherForCarouselBorders) {
      prevSelectedCarousel.classList.remove("opacity");
      prevSelectedCarousel.classList.remove("anotherRevealed2");
      anotherForCarouselBorders.classList.remove("anotherRevealed");
    }
    // Add selected class to clicked box
    carouselSmallItems[i].classList.add("opacity");
    carouselSmallItems[i].classList.add("anotherRevealed2")
    moreBordersBro[i].classList.add("anotherRevealed");


    // Update previously selected box
    prevSelectedCarousel = carouselSmallItems[i];
    anotherForCarouselBorders = moreBordersBro[i];
  }
  smallProducts[i].addEventListener("click", clickSmallCarouselProductAgain);

}







getFirstCart.addEventListener("click", () => {
  getFirstMenu.style.display == "block";
  if (getFirstMenu.style.display == "block") {
    getFirstMenu.style.display = "none";
  } else {
    getFirstMenu.style.display = "block";
  }

  littleShopCircle.style.display = "none";
})

deleteTrash[0].addEventListener("click", ()=>{
  cartWhenFullDescription.style.display = "none";
  cartWhenEmptyDescription.style.display = "block";
  checkoutButton.style.display = "none";
  
  plus.addEventListener("click", myPlus);
  minus.addEventListener("click",myMinus);
  button.style.pointerEvents = "";
  button.classList.remove("blur-background");
  button.style.cursor = "";
  zero.textContent = 0;
  button.addEventListener("click",functionOfButton)
})


const count = 0;
zero.textContent = count;

function myPlus() {
  if (zero.textContent >= 0 && zero.textContent < 4) {
    zero.textContent++
  }
}
function myMinus() {
  if (zero.textContent == 0) {
    zero.textContent = 0;
  } else {
    zero.textContent--
  }
}


plus.addEventListener("click", myPlus);

minus.addEventListener("click", myMinus);

function functionOfButton (){
  button.style.pointerEvents= "none";
  button.classList.add("blur-background");
  button.style.cursor = "default"
  minus.removeEventListener("click", myMinus);
  plus.removeEventListener("click", myPlus);
  littleShopCircle.textContent = zero.textContent;

  specialNumber.textContent = zero.textContent;
  total.textContent = `$${125 * specialNumber.textContent}.00`

  if (littleShopCircle.textContent == 0) {
    littleShopCircle.style.display = "none";
    cartWhenEmptyDescription.display = "block";
    cartWhenFullDescription.style.display = "none";
    checkoutButton.style.display = "none";
    button.style.pointerEvents= "";
    button.classList.remove("blur-background");
    button.style.cursor = "";
    minus.addEventListener("click",myMinus);
    plus.addEventListener("click",myPlus);
    

  } else {
    littleShopCircle.style.display = "flex";
    cartWhenFullDescription.style.display = "flex";
    cartWhenEmptyDescription.style.display = "none";
    checkoutButton.style.display = "block";

  }
}



button.addEventListener("click", functionOfButton);




function show (){
  carousel[0].style.display = "block";
  overlay[0].style.display = "block";
  easyCarousel.classList.add("no-hover");
  carousel[0].style.zIndex = "20";



  // plus.removeEventListener("click", myPlus);
  // smallProductDiv[0].style.zIndex = "-1";
  // for (let i = 0; i < smallProducts.length; i++) {
  //   smallProducts[i].style.opacity = "1";
  //   moreBorders[i].style.visibility = "hidden";
  // }
}

bigProductDiv.addEventListener("click", show);
littlePic.addEventListener("click", show);

closeX[0].addEventListener("click", () => {
  carousel[0].style.display = "none";
  overlay[0].style.display = "none";
  easyCarousel.classList.remove("no-hover");
  // carousel[0].parentNode.removeChild(carousel[0]);
  // overlay[0].parentNode.removeChild(overlay[0]);
  // for (let i = 0; i < smallProducts.length; i++) {
  //   smallProducts[i].style.opacity = "0.3";
  //   moreBorders[i].style.visibility="visible";
  // }
})
