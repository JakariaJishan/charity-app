import React from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51LP01fBZbjGbFMy56H4GBRncPW8UwkiWrVznvd1c1ibyobHSmV7cY7muTfOkYwWfhnY8dxoArL9IVinNT1lfkD0900pKUYIk8g"
);

const Donation = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default Donation;
