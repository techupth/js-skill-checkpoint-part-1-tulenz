// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(userPassword) {
  if (userPassword.length > 10) {
    return "Strong";
  } else if (userPassword.length < 6) {
    return "Weak";
  } else if (6 <= userPassword.length <= 10) {
    return "Medium";
  }
}

console.log(userPassword);
console.log(checkPasswordStrength(userPassword));
