import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_51KHXNgEhqLqdrjwEMCtqcPEVdCls1PEMjiH6V2Z6l336NrNm9A8GxyMlPj152oaKK16Fx3pd0GoveWrXsBLjMX4L00SybxLypM");


export default function Payment() {


  return (
    <div className="App">
      <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
    </div>
  );
}
