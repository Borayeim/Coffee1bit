document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("page-loader");

  // Hide the loader after the page has fully loaded
  window.addEventListener("load", () => {
    loader.style.display = "none";
  });

  // Optionally, show the loader when navigating away
  window.addEventListener("beforeunload", () => {
    loader.style.display = "block";
  });
});
