var browserHeight = window.innerHeight;
var browserWidth = window.innerWidth;
var contentHeight = document.getElementById('content-wrap').offsetHeight;

function setContentHeight() {
  browserHeight = window.innerHeight;
  contentHeight = document.getElementById('content-wrap').offsetHeight;

  document.getElementById('content-wrap').setAttribute("style","height:" + contentHeight + "px");
  if( browserHeight < contentHeight) {
    document.body.style.height = contentHeight + "px";
  }
  else {
    document.body.style.height = "100%";
  }
}

function viewCheck() {
  browserWidth = window.innerWidth;
  browserHeight = window.innerHeight;
  contentHeight = document.getElementById('content-wrap').offsetHeight;
  if ( browserWidth >= 768 || browserHeight < contentHeight ) {
    setContentHeight();
  }
}

viewCheck();
window.addEventListener("resize",viewCheck,false);
window.addEventListener("resize",setContentHeight,false);
