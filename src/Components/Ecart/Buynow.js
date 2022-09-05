import axios from "axios";
import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Buynow = ({ price, items }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51HaafvIKwFu1gFC7o2IHM1mmZfgRBJkbz8gKZrGuZcmRVr4ouUhUQodamUhdFS2DZLTIqs7Q3kRTnQwSqHmfl7Bz00GrHgnvX0";

    const onToken = async(token) => {
        if (token) {
            try {
                const res = await axios.post("http://localhost:5000/payments", {
                    token,
                    items,
                });
                console.log(res);
            } catch (err) {
                console.log(err.message);
            }
        }
        alert("payment successfull");
    };
    return ( <
        StripeCheckout label = "Buy Now"
        name = "Ecart Ltd."
        currency = "INR"
        billingAddress shippingAddress description = { `your total is ₹${price}` }
        amount = { priceForStripe }
        pannelLabel = "Pay Now"
        token = { onToken }
        stripeKey = { publishableKey }
        />
    );
};

export default Buynow;