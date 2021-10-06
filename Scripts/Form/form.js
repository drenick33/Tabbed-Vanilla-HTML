const handleSubmit = (e) => {
  e.preventDefault();
  showThankYouMessage();
  disableInputs();
};

const showThankYouMessage = () => alert("Thank you!");

const disableInputs = () => {
  const form = document.getElementById("monsterForm");
  const elements = form.elements;
  for (let i = 0; i < elements.length; i++) {
    elements[i].disabled = true;
  }
};
