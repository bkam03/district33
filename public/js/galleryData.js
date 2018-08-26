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
    description:
      "Congratulations to Sam’s long-time friend, Ken Kang for winning the prestigious Milken Educator Award for his efforts to improve the technology resources at Aiea High School. Ken started the first STEM course and since then has held workshops for all seven schools in the Aiea district to help improve their technology systems."
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
      "Representative Sam Kong presents his idea for a under the freeway housing development project at the Veteran's Caucus that was held on January 18, 2018."
  },
  {
    eventName: "Yard Work",
    folder: "Yardwork",
    description:
      "Representative Kong and supporters cleaning a constituent's yard of debris and over-growth. July 2018."
  },
  {
    eventName: "Back To School at Aiea High",
    folder: "BackToSchool",
    description:
      'Representative Kong at a "back to school" breakfast for Aiea High School teachers and staff, August 2018.'
  }
];

for (var i = 0; i < galleryArray.length; i++) {
  var currentGallery = galleryArray[i];

  var currentGalleryPath = `./public/resources/mainGallery/${
    currentGallery.folder
  }/`;
  var listOfPhotosInDirectory = fs.readdirSync(currentGalleryPath);
  currentGallery.photos = listOfPhotosInDirectory;

  for (var p = 0; p < currentGallery.photos.length; p++) {
    currentGallery.photos[p] = {
      photo: `resources/mainGallery/${currentGallery.folder}/${
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
