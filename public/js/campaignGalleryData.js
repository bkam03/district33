const fs = require("fs");

const galleryArray = [
  {
    eventName: "Campaigning",
    folder: "Campaigning",
    description:
      "Representative Kong and his supporters having a great time campaigning in Aiea."
  },
  {
    eventName: "June 9 Fundraiser",
    folder: "June9Fundraiser",
    description: "Representative Kong and his supporters at June 9 fundraiser."
  },
  {
    eventName: "April Fun Fair",
    folder: "AprilFunFair",
    description:
      "Representative kong and supporters volunteering at Aiea High School's annual Fun Fair, April, 3018."
  },
  {
    eventName: "Printing T-Shirts",
    folder: "T-ShirtPrinting",
    description:
      "Representative Kong and Campaign Manager Wayne Suzuki hard at work printing campaign T-shirts."
  },
  {
    eventName: "April 2018 Fundraiser",
    folder: "April2018Fundraiser",
    description:
      'Representative Kong pictured on the cake with (from left) Representative James "Jimmy" Tokioka, Representative Representative Ken Ito, Representative Sharon Har, Representative Lei R Learmont, and Representative Calvin Say.'
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
