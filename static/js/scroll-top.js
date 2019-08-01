// Load img and then animation

document.addEventListener("DOMContentLoaded", function(event) {
  const menu = document.getElementById('menu-total');
  menu.classList.add('js-loading');

  window.addEventListener("load", showPage);

  function showPage() {
    menu.classList.remove('js-loading');
  }
});


// document.body.classList.add('js-still-loading');


// document.onreadystatechange = function () {
//   if(document.readyState === "complete"){
//     loadPage();
//   }
// }

// function loadPage() {
//   document.body.classList.remove('js-still-loading');
// };

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
