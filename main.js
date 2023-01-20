function showPage(page) {
    let pages = document.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
    }
    document.getElementById(page).style.display = "block";
  }
  window.onload = function() {
  showPage("home");
  };