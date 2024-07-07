const read_more_btn = document.getElementById("read-more-btn");
const more_content = document.getElementById("more");
const dots = document.getElementById("dots");

read_more_btn.addEventListener("click", function () {
  if (more_content.style.display === "none") {
    more_content.style.display = "inline";
    dots.style.display = "none";
    read_more_btn.textContent = "Read less 📖🔼";
  } else {
    more_content.style.display = "none";
    dots.style.display = "inline";
    read_more_btn.textContent = "Read more 📖🔽";
  }
});
