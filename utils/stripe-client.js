import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

export const getStripe = async () => {
  console.log("process env", process.env);
  if (!stripePromise) {
    stripePromise = await loadStripe(process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  return stripePromise;
};
