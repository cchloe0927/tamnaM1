const checkbox = document.querySelector("#check");

function keepLogin() {
  const currentClass = checkbox.className;
  // console.log(currentClass)

  if (currentClass == "empty") {
    checkbox.src = "index_icon_img/icon_check.png";
    checkbox.classList.remove("empty");
  } else {
    checkbox.src = "index_icon_img/icon_check_empty.png";
    checkbox.classList.add("empty");
  }
}
checkbox.onclick = keepLogin;
