const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  let userName = event.target.userName.value;
  let password = event.target.password.value;
  let phone = event.target.phone.value;
  let email = event.target.email.value;

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  /* 
At least one lowercase letter
At least one uppercase letter
At least one digit
Minimum eight characters long
*/
  const usernamePattern = /^[a-zA-Z0-9._-]{3,20}$/;
  /*
Three to twenty alphanumeric characters, dots, underscores, or hyphens
*/
  const phonePattern = /^07\d{8}$/;

  /*
ten-digit phone number
*/
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  /*
One or more alphanumeric characters, dots, underscores, percentage signs, plus signs, or hyphens before the @ symbol
One or more alphanumeric characters or hyphens between the @ symbol and the dot before the top-level domain
A top-level domain consisting of two or more letters
*/

  if (!usernamePattern.test(userName)) {
    alert(
      "Please enter a username Three to twenty alphanumeric characters, dots, underscores, or hyphens without spaces."
    );
  }

  if (!emailPattern.test(email)) {
    alert(`Please enter a emailOne or more alphanumeric characters, dots, underscores, percentage signs, plus signs, or hyphens before the @ symbol
  One or more alphanumeric characters or hyphens between the @ symbol and the dot before the top-level domain
  A top-level domain consisting of two or more letters`);
  }

  if (!phonePattern.test(phone)) {
    alert(`Please enter ten-digit phone number start with 07`);
  }

  if (!passwordPattern.test(password)) {
    alert(`Please enter a passwordAt least one lowercase letter
  At least one uppercase letter
  At least one digit
  Minimum eight characters long`);
  }
});
