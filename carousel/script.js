function selector(x) {
  return document.querySelector(x);
}

let buttonLeft = selector(" .button-left");
buttonLeft.setAttribute("onclick", "changeSlideLeft()");

let buttonRight = selector(" .button-right");
buttonRight.setAttribute("onclick", "changeSlideRight()");

let crouselContent = [
  {
    img: "./top-10-beer-brands-in-india2.png",
    description:
      "Carlsberg is one of the most widely known craft beers and beer manufacturers in the country with a sneaky catchphrase of 'Probably the Best Beer in the World.' Carlsberg Elephant Strong Super Premium, which is incredibly potent and emerges with a vibrant malty character, will probably be the greatest-selling type in Carlsberg beers. Throughout this beer, there is also a dry resentment that is extremely gratifying, and as the title indicates, a strong hue of alcohol that is fantastic for festivities.",
    heading: "Carlsberg",
  },
  {
    img: "./top-10-beer-brands-in-india3.png",
    description:
      "Budweiser placed between Indian beer enthusiasts' best options, undoubtedly amongst the most popular beer brands often ordered at pubs and purchased from the kas in equal proportion. A tasty, medium-bodied American-style white craft beer is the legacy edition of Budweiser Premium, although the Budweiser Magnum is for anyone with an affinity for harder beverages. It is also among the most famous beer brands, something that is all too commonly correlated with the very first taste of beer someone encounters, not only in India but throughout the world.",
    heading: "Budweiser",
  },
  {
    img: "./top-10-beer-brands-in-india4.jpg",
    description:
      "Tuborg breweries are manufactured in India by Carlsberg company and are recognized for being among the nation's most luxury bottle-fermented malt beers. Tuborg Green is gentle and natural, with a delicate balancing act between flowers and cereals' aromas. This beer is medium-rich, with a mild volume of sweetness, and appears at an incredibly simple cost on the pockets. Tuborg Strong seems to be the most efficient Tuborg beer type, released with the desire for powerful beers among the Indian consumer base in view.",
    heading: "Tuborg",
  },
  {
    img: "./top-10-beer-brands-in-india5.png",
    description:
      "In India, maybe because of its budget-friendly market value thrown in with the stronger, frothier taste, Heineken has gained a massive fan following, not noticed very regularly in many other globally mass-manufactured lager beers. This flawlessly carbonated beer, particularly when you try and put some ice into the blend, is incredibly smooth to drink on. Heineken's pale lager beer is the nation's finest variety, and everyone knows the recognizable green bottle and a red star.",
    heading: "Heineken",
  },
  {
    img: "./top-10-beer-brands-in-india6.png",
    description:
      "Foster's Lager Beer is indeed one of the nation's finest packaged lager beers, and the sophisticated flavor is more often than justified by the evidence. Foster's Lager features a light-colored larger variety, teeming with a full-grain flavor and a smooth hop bitterness ratio. This filled beer is highly safe to drink and has an appealing botanical fragrance topping it off. Foster's Stronger is also a fantastic choice if you want a dark flavor and a tougher beverage experience.",
    heading: "Foster's",
  },
  {
    img: "./top-10-beer-brands-in-india7.png",
    description:
      "All right, apart from the name of the global pandemic and constant stream of memes, Corona attained the privilege of being one of India's greatest-selling beer brands, and across the world. Corona Extra beer is smoother and provides a noticeable dryness, including a good mix of malt and grain flavors than the typical beer you will be used to. The beer has a sweetness that really quick on the throat and is minimal in bitterness.",
    heading: "Corona Extra",
  },
];

let count = 0;

function changeSlideRight() {
  console.log(count);
  if(count === crouselContent.length){
      // let button = selector(".button-right");
      buttonRight.style.display = "none";
      buttonLeft.style.display = "block";
      count = 0;
  }

  if (count < crouselContent.length) {
    selector(".beer-img").src = crouselContent[count].img;
    let aboutBeer = selector(".about-beer");
    aboutBeer.innerHTML = crouselContent[count].description;
    let mainTitle = selector(".main-title");
    mainTitle.innerHTML = crouselContent[count].heading;
    buttonLeft.style.display = "block";
    count++;
  } 
}

function changeSlideLeft() {
  console.log(count);
  if (count < crouselContent.length) {
    selector(".beer-img").src = crouselContent[count].img;
    let aboutBeer = selector(".about-beer");
    aboutBeer.innerHTML = crouselContent[count].description;
    let mainTitle = selector(".main-title");
    mainTitle.innerHTML = crouselContent[count].heading;
    buttonRight.style.display = "block";
    count++;
  } if(count === crouselContent.length) {
    // let button = selector(".button-left");
    buttonLeft.style.display = "none";
    buttonRight.style.display = "";
    count = 0;
  }
}
