import React from "react";

function OrderConfirmation() {
  const checkout = {
    id: "12323",
    createdAt: new Date(),
    checkoutItems: [
      {
        productId: "1",
        name: "Jacket",
        color: "Black",
        size: "M",
        price: 150,
        quantity: 1,
        image: "http://picsum.photos/150?random=1",
      },
      {
        productId: "2",
        name: "Shirt",
        color: "Black",
        size: "S",
        price: 120,
        quantity: 1,
        image: "http://picsum.photos/150?random=2",
      },
    ],
    shippingAddress: {
      address: "123 Fashion Street",
      city: "New York",
      country: "USA",
    },
    deliveryMethod: "Standard Delivery (5–7 days)",
    paymentMode: "PayPal",
  };

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  const calculateTotal = () => {
    return checkout.checkoutItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-2xl">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You for Your Order!
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border border-gray-200">
          {/* Order Details */}
          <div className="flex justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">Order ID: {checkout.id}</h2>
              <p className="text-gray-500">
                Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
              <p className="text-emerald-700 text-sm">
                Estimated Delivery: {calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-700">
                Payment Mode: <span className="text-emerald-600">{checkout.paymentMode}</span>
              </p>
              <p className="font-medium text-gray-700">
                Delivery: <span className="text-emerald-600">{checkout.deliveryMethod}</span>
              </p>
            </div>
          </div>

          {/* Items */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Items:</h3>
            {checkout.checkoutItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b py-3 last:border-none"
              >
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.color} | Size: {item.size}
                  </p>
                  <p className="text-emerald-600 font-semibold">${item.price}</p>
                </div>
                <p className="text-gray-600">x{item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Shipping Address */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Shipping Address:</h3>
            <p className="text-gray-700">
              {checkout.shippingAddress.address}, {checkout.shippingAddress.city},{" "}
              {checkout.shippingAddress.country}
            </p>
          </div>

          {/* Total */}
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <p className="text-lg font-semibold">Order Total:</p>
            <p className="text-2xl font-bold text-emerald-700">${calculateTotal()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderConfirmation;
