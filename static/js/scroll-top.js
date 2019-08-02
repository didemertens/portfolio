// Load img and then animation

// document.body.classList.add('js-loading');

// window.addEventListener("load", showPage);

// function showPage() {
//   document.body.classList.remove('js-loading');
// };

const menuItems = document.querySelectorAll('.menu-item');
console.log(menuItems);

document.onreadystatechange = function () {
  if(document.readyState === "complete"){
    setTimeout(function() {
      loadMenu();
    }, 200);
  }
}

function loadMenu() {
  menuItems.forEach( (el) => {
    el.classList.add('js-load');
  });
};

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
