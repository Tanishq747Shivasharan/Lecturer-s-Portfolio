// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.querySelector('.video-scroller').addEventListener('wheel', function(event) {
  event.preventDefault();
  this.scrollLeft += event.deltaY * 2; // Adjust speed by changing multiplier
});