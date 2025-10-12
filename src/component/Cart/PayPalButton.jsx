import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalCheckoutButton({ amount, onSuccess, onError }) {
  return (
    <PayPalScriptProvider options={{ "client-id": "AdFGBX_BDbPLcRzy_EIsVOT1DtU_mJ9HLPCaLv5ihBB_k5K8SMpoS-z1G9Dj2wsBFyaAjrT8CC7-rO1z" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: { value: amount },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalCheckoutButton;
