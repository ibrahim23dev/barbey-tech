const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Information Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Information</h3>
          <p>
            Barbey Tech Consultancy is a leading travel technology partner who
            delivers innovative solutions for the travel industry. Our
            comprehensive software products empower worldwide travel businesses
            to automate business processes and enhance their customer service.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="h-10 cursor-pointer"
            />
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h3 className="text-lg font-bold mb-4">Related Products</h3>
          <ul className="space-y-2">
            <li>B2B Booking Engine</li>
            <li>B2C Booking Engine</li>
            <li>Tour Operator Software</li>
            <li>Travel Management System</li>
            <li>Travel Mobile Apps</li>
            <li>Restaurant Software</li>
            <li>Travel CRM</li>
          </ul>
        </div>

        {/* More Solutions */}
        <div>
          <h3 className="text-lg font-bold mb-4">More Solutions</h3>
          <ul className="space-y-2">
            <li>Web Design</li>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Mobile Application Development</li>
            <li>XML/API Integrations</li>
            <li>Search Engine Optimization</li>
            <li>Online Marketing Services</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white mt-10 pt-5">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm">© 2024 Barbey Tech. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
              alt="MasterCard"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/American_Express_logo_%282018%29.svg"
              alt="American Express"
              className="h-8"
            />
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-sm hover:underline">
            Terms
          </a>
          <a href="#" className="text-sm hover:underline">
            Privacy
          </a>
          <a href="#" className="text-sm hover:underline">
            Cookies
          </a>
          <a href="#" className="text-sm hover:underline">
            Careers
          </a>
          <a href="#" className="text-sm hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
