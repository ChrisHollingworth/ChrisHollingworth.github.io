

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}   

/*------------------------------------------------------------------------------------------------------------------------------------*/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function shrink() {
  var x = document.getElementById("myTopnav");
  if(window.pageYOffset <= sticky)
    {
      if (x.className === "topnav") 
        {
          x.className += " responsive";
        } 
     else 
      {
        x.className = "topnav";
      }
  }
  else /*if scroll is past sticky point, add sticky to responsive or topnav*/
    {console.log("sticky")
     if (x.className === "topnav sticky")
        {
          x.className += " responsive sticky";      
        } 
      else 
        {
          x.className = "topnav sticky";
        }
    }
}
