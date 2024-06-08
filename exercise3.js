const ch = document.getElementById("text");

const font_family = document.querySelector("#font_family");
const font_size = document.querySelector("#font_size");
const font_italic = document.querySelector("#font_italic");
const font_bold = document.querySelector("#font_bold");
const font_underline = document.querySelector("#font_underline");

console.log(font_family.value);

font_size.addEventListener("change", function () {
  if (font_size.value == "8pt") {
    ch.style.fontSize = "8pt";
  } else if (font_size.value == "10pt") {
    ch.style.fontSize = "10pt";
  } else if (font_size.value == "12pt") {
    ch.style.fontSize = "12pt";
  } else if (font_size.value == "14pt") {
    ch.style.fontSize = "14pt";
  } else if (font_size.value == "16pt") {
    ch.style.fontSize = "16pt";
  }
});

font_family.addEventListener("change", function () {
  if (font_family.value == "Verdana") {
    ch.style.fontFamily = "Verdana";
  } else if (font_family.value == "Helvetica") {
    ch.style.fontFamily = "Helvetica";
  } else if (font_family.value == "Times New Roman") {
    ch.style.fontFamily = "Times New Roman";
  } else if (font_family.value == "Courier New") {
    ch.style.fontFamily = "Courier New";
  } else if (font_family.value == "Arial") {
    ch.style.fontFamily = "Arial";
  }
});
font_italic.addEventListener("change", () => {
  if (font_italic.checked) {
    ch.style.fontStyle = "italic";
  } else {
    ch.style.fontStyle = "normal";
  }
});
font_bold.addEventListener("change", () => {
  if (font_bold.checked) {
    ch.style.fontWeight = "bold";
  } else {
    ch.style.fontWeight = "normal";
  }
});
font_underline.addEventListener("change", () => {
  if (font_underline.checked) {
    ch.style.textDecoration = "underline";
  } else {
    ch.style.textDecoration = "none";
  }
});
