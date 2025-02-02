let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const header = document.querySelector("nav");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    header.style.top = "-100px"; // Adjust this value as needed
  } else {
    // Scroll up
    header.style.top = "20px";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
