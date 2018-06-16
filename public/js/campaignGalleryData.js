const fs = require("fs");

const galleryArray = [
  {
    eventName: "April 2018 Fundraiser",
    folder: "April2018Fundraiser",
    description: "Representative Kong pictured here with..."
  }
  // {
  //   eventName: "Volcano Elementary Kids Visit",
  //   folder: "VolcanoElementaryKidsVisit",
  //   description: "Sam Kong and students from Volcano School."
  // },
];

for (var i = 0; i < galleryArray.length; i++) {
  var currentGallery = galleryArray[i];

  var currentGalleryPath = `./public/resources/campaignGallery/${
    currentGallery.folder
  }/`;
  var listOfPhotosInDirectory = fs.readdirSync(currentGalleryPath);
  currentGallery.photos = listOfPhotosInDirectory;

  for (var p = 0; p < currentGallery.photos.length; p++) {
    currentGallery.photos[p] = {
      photo: `resources/campaignGallery/${currentGallery.folder}/${
        currentGallery.photos[p]
      }`
    };
  }
}

var galleryData = {
  galleries: galleryArray
};

//console.log(galleryData.galleries[1]);

module.exports = galleryData;
