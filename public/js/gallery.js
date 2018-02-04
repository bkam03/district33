let galleries = [
  {
    name: "test",
    description: "it is a test",
    photos: [ "images.jpg", "images 2.png", "images 3.png" ]
  },
  {
    name: "test2",
    description: "test event 2",
    photos: [ "images 2.png", "images 3.png" ]
  }
];

function eventPhotoExtractor( photoArray, eventName ) {
  let photoGalleryReturn = "";
  for( var i = 0; i < photoArray.length; i++ ){
    photoGalleryReturn += `<img src="./resources/${eventName}/${photoArray[i]}" class="photo"/>`;

  }
  console.log( photoGalleryReturn );
  return photoGalleryReturn;
}

//target content div
let contentDiv = document.querySelector( '.content' );

//loop through each gallery/event object
for( i = 0; i < galleries.length; i++ ){
  let currentEvent = galleries[i];


  //new div
  let newGallery = document.createElement( 'div' );
  newGallery.className = "eventBlock";

  //alternate gallery backgrounds
  let backgroundColor = "green";
  if( i % 2 !== 1 ){
    backgroundColor = "white";
  }
  newGallery.style.background = backgroundColor;

  //new event name
  let eventHeader = document.createElement( 'h2' );
  eventHeader.innerHTML = currentEvent.name;
  newGallery.appendChild( eventHeader );
  //new event description
  let eventDescription = document.createElement( 'p' );
  eventDescription.innerHTML = currentEvent.description;
  eventDescription.className = "description";
  newGallery.appendChild( eventDescription );

  let eventGallery = document.createElement( 'div' );
  eventGallery.innerHTML = eventPhotoExtractor( currentEvent.photos, currentEvent.name );
  eventGallery.className = "gallery";
  newGallery.appendChild( eventGallery );

  contentDiv.appendChild( newGallery );
}
