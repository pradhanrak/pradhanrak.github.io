//function to set height of the absolute div and the body
function setHeight(heightBValue, heightCValue) {
  document.getElementById('main-wrap').setAttribute("style","height:" + heightCValue);
  document.body.style.height = heightBValue;
}

//function to get measurements required
function getMeasurements() {
  var contentHeight = document.getElementById('main').clientHeight;
  var browserWidth = window.innerWidth;

  //when browser width is less than 768px
  if ( browserWidth >= 768 ) {
    setHeight(contentHeight + 40 + "px", contentHeight + "px");
  }
  else {
    setHeight("auto", "auto");
  }
}


getMeasurements();
//when browser resized
window.addEventListener("resize",getMeasurements,false);
