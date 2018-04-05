const fs = require("fs");

const galleryArray = [
  {
    eventName: "HEW Meeting",
    folder: "HEWMeeting",
    description:
      "Representative Sam Kong and Architect Russell Wozniak presenting their Under and Upwards homeless housing project at Pearl City's Health, Education, and Welfare (HEW) Committee Hearing at Lehua Elementary on January 26, 2018."
  },
  {
    eventName: "Milken Educator Award",
    folder: "MilkenEducatorAward",
    description: ""
  },
  {
    eventName: "Pearl Harbor Survivor Funeral Service",
    folder: "PearlHarborSurvivorFuneralService",
    description:
      "Representative Sam Kong at the funeral service for Pearl Harbor survivor Estelle Birdsell at Airzona Memorial on December 5, 2017."
  },
  // {
  //   eventName: "Volcano Elementary Kids Visit",
  //   folder: "VolcanoElementaryKidsVisit",
  //   description: "Sam Kong and students from Volcano School."
  // },
  {
    eventName: "Veteran's Caucus",
    folder: "Veteran'sCaucus",
    description:
      "Pictures from the Veterans' Caucus hosted by Representative Kong and Representative Gene Ward that was held on January 18, 2018.   Legislators and other guests came to learn what US Vets is doing for our veterans."
  }
];

for (var i = 0; i < galleryArray.length; i++) {
  var currentGallery = galleryArray[i];

  var currentGalleryPath = `./public/resources/${currentGallery.folder}/`;
  var listOfPhotosInDirectory = fs.readdirSync(currentGalleryPath);
  currentGallery.photos = listOfPhotosInDirectory;

  for (var p = 0; p < currentGallery.photos.length; p++) {
    currentGallery.photos[p] = {
      photo: `resources/${currentGallery.folder}/${currentGallery.photos[p]}`
    };
  }
}

var galleryData = {
  galleries: galleryArray
};

//console.log(galleryData.galleries[1]);

module.exports = galleryData;
