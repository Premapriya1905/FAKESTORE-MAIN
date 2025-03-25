const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Newsletter */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">NOVA</h2>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-60 p-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Sign-Up
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-gray-400 font-semibold">Contact Info</h3>
            <p className="text-gray-500">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-black font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-600 cursor-pointer">Laptops & Computers</li>
            <li className="hover:text-red-600 cursor-pointer">Cameras & Photography</li>
            <li className="hover:text-red-600 cursor-pointer">Smart Phones & Tablets</li>
            <li className="hover:text-red-600 cursor-pointer">Video Games & Consoles</li>
            <li className="hover:text-red-600 cursor-pointer">Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-black font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-600 cursor-pointer">My Account</li>
            <li className="hover:text-red-600 cursor-pointer">Discount</li>
            <li className="hover:text-red-600 cursor-pointer">Returns</li>
            <li className="hover:text-red-600 cursor-pointer">Orders History</li>
            <li className="hover:text-red-600 cursor-pointer">Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-black font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-600 cursor-pointer">Blog</li>
            <li className="hover:text-red-600 cursor-pointer">Browse the Shop</li>
            <li className="hover:text-red-600 cursor-pointer">Category</li>
            <li className="hover:text-red-600 cursor-pointer">Pre-Built Pages</li>
            <li className="hover:text-red-600 cursor-pointer">Visual Composer Elements</li>
            <li className="hover:text-red-600 cursor-pointer">WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center">
        <p className="text-gray-500">&copy;NOVA - All Rights Reserved</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-500 hover:text-red-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
