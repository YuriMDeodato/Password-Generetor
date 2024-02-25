function pswGenerate() {
  let characters = "abcdefghijklmnopqrstuvwzyz";
  let passwordS = "";
  let password = "";
  let leght = document.getElementById("pswLeght").value;
  let qtd = document.getElementById("pswQtd").value;
  let spc = document.getElementById("special").checked;
  let numb = document.getElementById("number").checked;
  let upp = document.getElementById("upperCase").checked;

  if (spc == true) {
    characters += "!@#$%&*()";
  }
  if (numb == true) {
    characters += "123456789";
  }
  if (upp == true) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  for (let y = 1; y <= leght; y++) {
    password =
      password +
      characters.charAt(Math.floor(Math.random() * characters.length));
  }

  passwordS = password + "\n" + passwordS;

  //console.log(passwordS);
  //alert(passwordS);
  document.getElementById("answer").value = passwordS;
}

function pswClean() {
  document.getElementById("answer").value = "";
}
