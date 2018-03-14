var lightBox = document.querySelector(".lightBox");

var lightBoxPhoto = document.querySelector(".lightBoxPhoto");

var photoArray = document.querySelectorAll(".galleryPhoto");

var closeButton = document.querySelector(".close");

photoArray.forEach(photo => {
  photo.addEventListener("click", () => {
    lightBox.style.display = "block";
    let imgSrcToDisplay = event.target.attributes[0].nodeValue;
    lightBoxPhoto.src = imgSrcToDisplay;
  });
});

closeButton.addEventListener("click", () => {
  lightBox.style.display = "none";
});
