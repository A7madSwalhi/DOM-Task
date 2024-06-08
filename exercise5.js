const hidebtn = document.querySelector("p>a");
const showbtn = document.querySelector("div>a");
const myp = document.getElementById("p1_text");

hidebtn.addEventListener("click", () => {
  myp.style.display = "none";
});

showbtn.addEventListener("click", () => {
  myp.style.display = "block";
});
