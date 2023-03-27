const orderForm = document.getElementById("order-form");
const thankYouMessage = document.querySelector("#thank-you-message");
const orderSummary = document.getElementById("order-summary");

orderForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form from submitting

  // get form data
  const formData = new FormData(orderForm);
  const name = formData.get("name");
  const coffeeType = formData.get("coffee-type");
  const size = formData.get("size");
  const milk = formData.get("milk");
  const sugar = formData.get("sugar");

  // build order summary
  const summary = `
    <h2>Coffee Preference for ${name}:</h2>
    <p>Name: ${name}</p>
    <p>Coffee Type: ${coffeeType}</p>
    <p>Size: ${size}</p>
    <p>Milk: ${milk}</p>
    <p>Sugar: ${sugar}</p>
  `;

  // display order summary
  orderSummary.innerHTML = summary;

  thankYouMessage.innerHTML = `Thank you ${name} for your order! See summary below.`;

  // reset form
  orderForm.reset();
});
