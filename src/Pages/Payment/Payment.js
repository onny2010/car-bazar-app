import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import useAuth from "../../hooks/useAuth";
const stripePromise = loadStripe("pk_test_51JzIXkDSbfkSaEB4GjEqlKTdO5YELKub5eKSJJUZqgS7NlcqdHB0IytGwRR8YAAu4UaqHExoYct1tXjdnrC8PxEZ00JHsBiqyG");

const Payment = () =>{
    const [clientSecret, setClientSecret] = useState("");
    const {product} = useAuth()
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: parseInt(product?.price) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [product?.price]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  console.log(clientSecret)
    return (
        <div className="container">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    )
}
export default Payment;