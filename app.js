// let passwordbox = document.getElementById("password"); //input calling
// let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let lower = "abcdefghijklmnopqrstuvwxyz";
// let num = "0123456789";
// let spacial = "][./;',`@#$%^&**(_";

// function generate() {
//   let length = 12;
//   let password = "";
//   password = password + uppercase[Math.floor(Math.random() * uppercase.length)];
//   password = password + lower[Math.floor(Math.random() * lower.length)];
//   password = password + num[Math.floor(Math.random() * num.length)];
//   password = password + spacial[Math.floor(Math.random() * spacial.length)];
//   let all = uppercase + lower + num + spacial;
//   while (password.length < length) {
//     password = password + all[Math.floor(Math.random() * all.length)];
//   }

//   passwordbox.value = password;
//   console.log(passwordbox.value);
// }
// //copy function
// function copy() {
//   passwordbox.select();
//   document.execCommand = "copy";
// }

let box = document.getElementById("password");
let upper = "SDFHKL;WERYIOPXVBM";
let lower = "sdfbmertuiocvbnm";
let n = "234567890";
let spacial = "!@#$%^&*()_}{}{>";
let all = upper + lower + n + spacial;
let length = 10;

function generate() {
  let password = "";
  password += upper[Math.floor(Math.random() * upper.length)];
  password += lower[Math.floor(Math.random() * lower.length)];
  password += n[Math.floor(Math.random() * n.length)];
  password += spacial[Math.floor(Math.random() * spacial.length)];
  while (password.length < length) {
    password += all[Math.floor(Math.random() * all.length)];
  }
  box.value = password;
  console.log(password);
}

//copy
function copy() {
  box.select();
  document.execCommand = "copy";
  console.log(document.execCommand="copy");
}
