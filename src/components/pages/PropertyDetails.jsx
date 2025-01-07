import { useLocation } from "react-router-dom";
import { useState } from "react";

const PaymentGateway = () => {
  const location = useLocation();
  const { property } = location.state || {};
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    if (!property) return;

    // Razorpay payment options
    const options = {
      key: "rzp_test_tN3i854xgi7E9J",

      amount: parseInt(property.price.replace(/[^0-9]/g, "")) * 100, 
      currency: "INR",
      name: property.name,
      description: property.description,
      image: property.image,
      handler: function (response) {
        console.log("Payment successful:", response);
        setPaymentSuccess(true);
      },
      prefill: {
        name: "Cardholder Name",
        email: "user@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      console.error("Payment failed:", response.error);
      alert("Payment failed. Please try again.");
    });

    rzp.open();
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 mt-16">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Payment Details
        </h1>
        {paymentSuccess ? (
          <p className="text-gray-700 text-center">Payment Successful!</p>
        ) : property ? (
          <>
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {property.name}
            </h2>
            <p className="text-lg text-gray-700 mb-2">{property.description}</p>
            <p className="text-xl font-bold text-gray-900 mb-4">
              Total Price: {property.price}
            </p>

            <button
              onClick={handlePayment}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500"
            >
              Pay with Razorpay
            </button>
          </>
        ) : (
          <p className="text-gray-700 text-center">No property details found.</p>
        )}
      </div>
    </div>
  );
};

export default PaymentGateway;
