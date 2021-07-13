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
  fetch("http://book.alitechbot.uz/api/sign-up", requestOption)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        alert("Ruyhatdan utdiz");
        window.location.pathname = "search.html";
      } else {
        alert("Qayta uring");
      }
    })
    .catch((msg) => console.log(msg, "xatolik"));
}
