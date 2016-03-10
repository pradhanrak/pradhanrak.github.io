
function setContentHeight() {
  var browserHeight = window.innerHeight;
  var contentHeight = document.getElementById('content-wrap').offsetHeight;

  document.getElementById('content-wrap').setAttribute("style","height:" + contentHeight + "px");
  if( browserHeight < contentHeight) {
    document.body.style.height = contentHeight + "px";
  }
  else {
    document.body.style.height = "100%";
  }
}
function viewWidth() {
  var browserWidth = window.innerWidth;
  if ( browserWidth >= 768) {
    setContentHeight();
  }
}

viewWidth();
window.addEventListener("resize",setContentHeight,false);
