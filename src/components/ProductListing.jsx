import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { CheckCircle, X } from 'lucide-react';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedProductId, setAddedProductId] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1000);
  };

  const closeModal = () => setSelectedProduct(null);

  return (
    <div id="products" className="container mx-auto px-15 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="border rounded-lg p-4 bg-white shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 cursor-pointer flex flex-col"
            onClick={() => setSelectedProduct(product)}
            whileHover={{ scale: 1.02 }}
          >
            {/* Product Image */}
            <div className="w-full h-56 bg-white rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="flex-grow mt-4">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-500 mt-1">${product.price.toFixed(2)}</p>
            </div>

            {/* Add to Cart Button (Aligned at Bottom) */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              className={`mt-auto px-4 py-2 rounded-lg w-full flex items-center justify-center transition ${
                addedProductId === product.id
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
              whileTap={{ scale: 0.97 }}
            >
              {addedProductId === product.id ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Added!
                </>
              ) : (
                'Add to Cart'
              )}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-white rounded-xl shadow-xl w-full max-w-md sm:max-w-lg relative p-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Product Image */}
            <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Info */}
            <h2 className="text-xl font-bold mt-4 text-gray-800">
              {selectedProduct.title}
            </h2>
            <p className="text-gray-500 mt-2">
              {selectedProduct.description}
            </p>
            <p className="text-gray-800 font-semibold mt-2">
              ${selectedProduct.price.toFixed(2)}
            </p>

            {/* Add to Cart Button */}
            <motion.button
              onClick={() => {
                handleAddToCart(selectedProduct);
                closeModal();
              }}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full"
              whileTap={{ scale: 0.98 }}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductListing;
