import React from "react";

function Footer() {
  return (
    <footer className="w-full p-8 py-10 pb-6 bg-blue-50">
      <div className="mx-auto flex justify-between items-center">
        <div className="w-1/2 text-center">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="w-1/2 text-center">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="list-none p-0">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">Stays</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mt-4">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Booking Clone. Developed by Hashim
        </p>
      </div>
    </footer>
  );
}

export default Footer;
