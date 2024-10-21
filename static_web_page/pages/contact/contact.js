function validateForm() {
  let fields = ["email", "topic-select", "text-message"];
  for (var i in fields) {
    let x = document.forms["contactForm"][i].value;
    if (x == "") {
      alert("All fields must be filled out.");
      return false;
    }
  }
  alert("Your message was sent.");
  return true;
}
