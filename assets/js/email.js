const inputElements = [
  document.getElementById("name"),
  document.getElementById("email"),
  document.getElementById("subject"),
  document.getElementById("message"),
];
const subBtn = document.getElementById("submitBtn");

function input_checker() {
  const allFilled = inputElements.every((input) => input.value.trim() !== "");
  subBtn.classList.toggle("disabled", !allFilled);
}

function send_mail() {
  if (subBtn.classList.contains("disabled")) return;

  let parameters = {
    name: inputElements[0].value,
    email: inputElements[1].value,
    subject: inputElements[2].value,
    message: inputElements[3].value,
  };

  const service_id = "service_t6tje68";
  const template_id = "contact_form";

  emailjs
    .send(service_id, template_id, parameters)
    .then((response) => {
      inputElements.forEach((input) => (input.value = ""));
      input_checker(); // Reset button state
      console.log(response);
      alert("Message sent successfully!");
    })
    .catch((err) => {
      console.log("Error: ", err);
      alert("Failed to send message. Please try again.");
    });
}

// Call input_checker initially and on input events
input_checker();
inputElements.forEach((input) =>
  input.addEventListener("input", input_checker)
);
