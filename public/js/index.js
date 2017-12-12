/*let menuButtonsArray = document.querySelectorAll(".menuButton");
menuButtonsArray.forEach(menuButton => {
  menuButton.addEventListener("click", function() {
    this.classList.add("menuButtonClick");
  });
});

let minimizeButtonArray = document.querySelectorAll(".minimize");
minimizeButtonArray.forEach(minButton => {
  minButton.addEventListener("click", function() {
    let targetMenuButton = event.target.parentNode;
    console.log(targetMenuButton);
    targetMenuButton.classList.remove("menuButtonClick");
  });
});
*/
let resourcePath = "./resources/";

let galleryPics = [
  {
    name: "images.jpg"
  },
  {
    name: "images 2.png"
  },
  {
    name: "images 3.png"
  }
];

let targetDivForGallery = document.querySelector("#gallery");

galleryPics.forEach( function( pic ){
  //make container div for pic
  let newImage = document.createElement('div');
  newImage.className = "imgContainer";
  //create and set image + attributes
  let img = document.createElement('img');
  img.src = resourcePath+pic.name;
  img.className = "galleryPic";


  newImage.appendChild( img );
  targetDivForGallery.appendChild( newImage );

  console.log( newImage );
} );