function smoothScroll(id, event) {
  // event.preventDefault();
  let element = document.getElementById(id);
  let position = element.offsetTop;
  let currentPosition = window.pageYOffset;
  let distance = position - currentPosition;
  let increment = distance/50;

  function animation() {
    currentPosition += increment;
    window.scrollTo(0, currentPosition);
    if (currentPosition < position) {
      setTimeout(animation, 10);
    }
  }

  animation();
}
