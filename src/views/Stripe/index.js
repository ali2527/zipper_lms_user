import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51NhUrwFeDykiEFxY7ncpmL4062rAfvJLDdd3ivWlsOqkFsurQW2ZYnmAq6fInVnipvLA29PQ6ER2gPjyyrICYH9y00MpGGCR2G");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!stripe || !elements) {
      setIsLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    } else {
      // Payment method created successfully, send the Payment Method ID to the server
      // You can make an API request to your server with the paymentMethod.id

      const response = await fetch("http://localhost:5000/api/payment/createCharge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
        }),
      });

      if (response.ok) {
        setIsLoading(false);
        setSuccessMessage("Payment successful!");
      } else {
        setIsLoading(false);
        setErrorMessage("Payment failed. Please try again.");
      }
    }
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="card-element">Card details</label>
          <CardElement id="card-element" />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <button type="submit" disabled={!stripe || isLoading}>
          {isLoading ? "Processing..." : "Pay"}
        </button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Stripe Payment Integration</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default App;