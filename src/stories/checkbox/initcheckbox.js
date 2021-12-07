window.eventCheckbox = (e) => {
  const inputCheckbox = e.currentTarget.querySelector(".checkbox-input");

  if (inputCheckbox.checked) {
    inputCheckbox.checked === false;
  } else {
    inputCheckbox.checked === true;
  }
};
