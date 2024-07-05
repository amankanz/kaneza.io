const input_elements = [
  document.getElementById("name"),
  document.getElementById("email"),
  document.getElementById("subject"),
  document.getElementById("message"),
];

const subBtn = document.getElementById("submitButton");

function input_checker() {
  const all_filled = input_elements.every((input) => input.value.trim() !== "");
  subBtn.classList.toggle("disabled", !all_filled);
}
input_checker();

input_elements.forEach((input) =>
  input.addEventListener("input", input_checker)
);
