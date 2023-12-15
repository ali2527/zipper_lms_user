import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_51NhUrwFeDykiEFxY7ncpmL4062rAfvJLDdd3ivWlsOqkFsurQW2ZYnmAq6fInVnipvLA29PQ6ER2gPjyyrICYH9y00MpGGCR2G");


export default function Payment({type}) {


  return (
    <div className="App">
      <Elements stripe={stripePromise}>
          <CheckoutForm type={type}/>
        </Elements>
    </div>
  );
}
