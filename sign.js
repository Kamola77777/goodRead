function signUp(event) {
  event.preventDefault();
  let signForm = document.getElementById("sign-up");
  const { email, password, firstName } = signForm;
  let users = {
    email: email.value,
    password: password.value,
    firstName: firstName.value,
  };
  console.log(users);
  var requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(users),
  };
  fetch("https://book.alitechbot.uz/api/sign-up", requestOption)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      localStorage.token = data.token
      if (data.success) {
        alert("You have been registered");
        window.location.pathname = "addBook.html";
      } else {
        alert("Try again");
      }
    })
    .catch((msg) => console.log(msg, "Error"));
}
function myFunction() {
  window.history.back();
}