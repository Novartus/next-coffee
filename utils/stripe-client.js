import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

export const getStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      `pk_test_51It9p7K7gYarDdxebqWKRk8CPGeQqyUZDGpqyjcTJxS7acNWluTOauJkD9jCtqVUur1aSNv2wp2vOn8D02aWpaMg00N4XwXKkN`
    );
  }

  return stripePromise;
};
