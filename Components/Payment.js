import React, { useState } from "react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { GiCancel } from "react-icons/gi";
import { getStripe } from "../utils/stripe-client";
import styles from "../styles/Payment.module.scss";

const CARD_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const CardField = ({ onChange }) => (
  <CardElement options={CARD_OPTIONS} onChange={onChange} />
);

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className={styles.modal_payment_details}>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      onFocus={(e) => (e.target.placeholder = "")}
      onBlur={(e) => (e.target.placeholder = placeholder)}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);

const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={`SubmitButton ${error ? "SubmitButton--error" : ""}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? "Processing..." : children}
  </button>
);

const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
);

const CheckoutForm = ({ onClick, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    email: "",
    phone: "",
    name: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (error) {
      elements.getElement("card").focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    });

    setProcessing(false);

    if (payload.error) {
      setError(payload.error);
    } else {
      setPaymentMethod(payload.paymentMethod);
    }
  };

  return paymentMethod ? (
    <div className={styles.modal_payment_page_container}>
      <div className={styles.modal_payment_container}>
        <div className={styles.modal_payment_header}>
          <h2>Payment successful</h2>
        </div>
        <div className={styles.modal_content}>
          <p className={styles.modal_plan}>
            Thanks for buying from
            <br />
            <span> Next Coffee Shop </span>.
            <br />
            <br />
            No money was charged, but we generated a Payment Method : <br />
            <span> {paymentMethod.id?.slice(0, -3)}</span>
          </p>
        </div>
        <button
          className="button-secondary"
          style={{
            textAlign: "center",
            margin: "0 auto",
            display: "block",
          }}
          onClick={onClick}
        >
          Close
        </button>
      </div>
    </div>
  ) : (
    <div className={styles.modal_payment_page_container}>
      <div className={styles.modal_payment_container}>
        <div className={styles.modal_payment_header}>
          <h2>Checkout Summary</h2>
          {!processing && (
            <div className={styles.modal_close} onClick={onClick}>
              <GiCancel size={40} />
            </div>
          )}
        </div>
        <div className={styles.modal_payment_content}>
          <form onSubmit={handleSubmit}>
            <Field
              label="Name"
              id="name"
              type="text"
              placeholder="Jane Doe"
              required
              autoComplete="name"
              value={billingDetails.name}
              onChange={(e) => {
                setBillingDetails({
                  ...billingDetails,
                  name: e.target.value,
                });
              }}
            />
            <Field
              label="Email"
              id="email"
              type="email"
              placeholder="janedoe@gmail.com"
              required
              autoComplete="email"
              value={billingDetails.email}
              onChange={(e) => {
                setBillingDetails({
                  ...billingDetails,
                  email: e.target.value,
                });
              }}
            />
            <Field
              label="Phone"
              id="phone"
              type="tel"
              placeholder="(941) 555-0123"
              required
              autoComplete="tel"
              value={billingDetails.phone}
              onChange={(e) => {
                setBillingDetails({
                  ...billingDetails,
                  phone: e.target.value,
                });
              }}
            />
            <div className={styles.modal_payment_details}>
              <CardField
                onChange={(e) => {
                  setError(e.error);
                  setCardComplete(e.complete);
                }}
              />
            </div>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
            <p>${amount}</p>
            <div className={styles.modal_payment_checkout}>
              <SubmitButton
                processing={processing}
                error={error}
                disabled={!stripe}
              >
                Checkout
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = getStripe();

const Payment = ({ onClick, amount }) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm onClick={onClick} amount={amount} />
      </Elements>
    </div>
  );
};

export default Payment;
