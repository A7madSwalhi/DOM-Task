const btn = document.querySelector("#addButton");
const inp = document.querySelector("#songTextInput");

console.log(btn);
console.log(inp);

btn.addEventListener("click", () => {
  const txt = (document.createTextNode = inp.value);
  const myli = document.createElement("li");
  const del = document.createElement("button");

  const txtbt = (document.createTextNode = "delete");
  del.append(txtbt);
  myli.append(txt);
  myli.append(del);

  document.body.append(myli);

  del.onclick = () => {
    myli.remove();
  };
});
