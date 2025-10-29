import React, { useState } from "react";

function Cards({ item }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleBuyNow = async () => {
    try {
      const res = await fetch("/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: item.price }),
      });

      const data = await res.json();

      if (!data.success) {
        alert("Order creation failed");
        return;
      }

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "BookCity Store",
        description: `Payment for ${item.name}`,
        order_id: data.orderId,
        handler: async (response) => {
          console.log(response);
          setShowMessage(true); // ✅ show overlay after payment success
        },
        prefill: {
          name: "Vishal Pathak",
          email: "example@email.com",
        },
        theme: { color: "#f472b6" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment Failed. Try again!");
    }
  };

  return (
    <>
      {/* Product Card */}
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

      {/* ✅ Centered Full-Screen Message Box with Blur */}
      {showMessage && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white dark:bg-slate-900 text-black dark:text-white p-8 rounded-2xl shadow-2xl text-center w-[90%] md:w-[500px] border border-pink-400">
            <h2 className="text-2xl font-bold mb-4 text-pink-600">
              ✅ Payment Successful!
            </h2>
            <p className="text-lg mb-3 font-medium">Next Step:</p>
            <p className="text-lg mb-4">
              Please send your <b>payment screenshot</b> and <b>address</b> on
              WhatsApp number:
            </p>
            <p className="text-2xl font-semibold text-green-600">
              8630198478
            </p>
            <button
              onClick={() => setShowMessage(false)}
              className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;
