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
  };

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You for Your Order!
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border">
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
          </div>

          {/* Order Items */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Items:</h3>
            {checkout.checkoutItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 border-b py-2">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                  <p className="text-emerald-600 font-semibold">${item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Shipping Address */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Shipping Address:</h3>
            <p>
              {checkout.shippingAddress.address}, {checkout.shippingAddress.city},{" "}
              {checkout.shippingAddress.country}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderConfirmation;
