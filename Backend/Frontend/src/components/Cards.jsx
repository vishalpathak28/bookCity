import React, { useState } from "react";
import axios from "axios";

function Cards({ item }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleBuyNow = async () => {
    try {
      // Create order from backend
      const res = await fetch("/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: item.price }), // dynamic price
      });

      const data = await res.json();

      if (!data.success) {
        alert("Order creation failed");
        return;
      }

      // Razorpay options
      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "BookCity Store",
        description: `Payment for ${item.name}`,
        order_id: data.orderId,

        handler: async (response) => {
          console.log("Payment successful:", response);
          setShowMessage(true); // ✅ Show success box
        },

        prefill: {
          name: "Vishal Pathak",
          email: "example@email.com",
        },
        theme: { color: "#f472b6" },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        alert("Payment Failed. Please try again!");
        console.error(response.error);
      });
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment Failed. Try again!");
    }
  };

  return (
    <>
      {/* ✅ Full-screen success message box */}
      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white text-center p-8 rounded-2xl shadow-2xl max-w-md mx-4">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Payment Successful 🎉
            </h2>
            <p className="text-gray-800 text-lg mb-6">
              Next Step: Please send your <b>payment screenshot</b> and your{" "}
              <b>address</b> on WhatsApp no -{" "}
              <span className="font-semibold text-pink-600">8630198478</span>
            </p>
            <button
              onClick={() => setShowMessage(false)}
              className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* ✅ Product Card */}
      <div className="mt-4 my-3 p-3">
        <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">₹{item.price}</div>
              <div
                onClick={handleBuyNow}
                className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
