const ele = document.getElementById("mydiv");

console.log(ele);

ele.onmouseenter = () => {
  ele.innerText = "can i help you?";
};
ele.onmouseleave = () => {
  ele.innerText = "Hello world";
};
