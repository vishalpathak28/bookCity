import React from "react";
import axios from "axios";

function Cards({ item }) {
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
          // ✅ Close Razorpay popup
          alert(
            "Next Step: Please send your payment screenshot and your address on WhatsApp no - 8630198478"
          );
          console.log("Payment successful:", response);
        },

        prefill: {
          name: "Vishal Pathak",
          email: "example@email.com",
        },
        theme: { color: "#f472b6" },
      };

      const rzp = new window.Razorpay(options);

      // ✅ When user completes or cancels payment, popup will close automatically
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
  );
}

export default Cards;
