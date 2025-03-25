import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash } from 'lucide-react';

const CartPage = () => {
  const { cart, removeFromCart, updateCartItem } = useCart();

  // Ensure quantity is defined and calculate total price
  const totalPrice = cart.reduce((total, item) => {
    const itemQuantity = item.quantity || 1;
    return total + item.price * itemQuantity;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1178/1178479.png"
            alt="Empty Cart"
            className="h-32 w-32 sm:h-40 sm:w-40 mx-auto mb-4"
          />
          <p className="text-gray-500 text-sm sm:text-base">
            Your cart is empty.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between border-b pb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Product Image */}
                <div className="flex items-center w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 object-contain rounded-lg mr-4"
                  />
                  <div>
                    {/* ✅ Responsive title size */}
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <button
                    onClick={() =>
                      updateCartItem(item.id, Math.max(1, (item.quantity || 1) - 1))
                    }
                    className="border border-gray-300 px-3 py-1 rounded-l-md hover:bg-gray-100 transition text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 w-10 text-center text-sm">
                    {item.quantity || 1}
                  </span>
                  <button
                    onClick={() =>
                      updateCartItem(item.id, (item.quantity || 1) + 1)
                    }
                    className="border border-gray-300 px-3 py-1 rounded-r-md hover:bg-gray-100 transition text-sm"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 sm:mt-0 text-red-500 hover:text-red-700 transition"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 border rounded-lg p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Order Summary
            </h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500 text-sm sm:text-base">
                Subtotal:
              </span>
              <span className="text-gray-800 text-sm sm:text-base">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500 text-sm sm:text-base">
                Shipping:
              </span>
              <span className="text-gray-800 text-sm sm:text-base">
                $5.00
              </span>
            </div>
            <div className="flex justify-between mt-4 border-t pt-4">
              <span className="font-semibold text-sm sm:text-base">
                Total:
              </span>
              <span className="font-semibold text-sm sm:text-base">
                ${(totalPrice + 5).toFixed(2)}
              </span>
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="mt-6 bg-green-500 text-white w-full py-3 rounded-lg hover:bg-green-600 transition text-sm sm:text-base"
            >
              Proceed to Checkout
            </motion.button>
            <Link
              to="/"
              className="mt-4 block text-center text-blue-500 hover:underline text-sm sm:text-base"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
