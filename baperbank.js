//log in
document.getElementById("login_btn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "zannat@gmail.com" && password === "password") {
    window.location.href = "baperbank.html";
  } else {
    document.getElementById("empty").innerText =
      "Please provide a correct password and email";
  }
});
