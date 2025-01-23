
// Add an event listener for the scroll event
window.addEventListener("scroll", function () {
  toggleStickyClass();
});

// Get the navbar element and its initial offset position
const header = document.getElementById("navbar");
const sticky = header.offsetTop;

// Function to toggle the 'sticky' class
function toggleStickyClass() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
