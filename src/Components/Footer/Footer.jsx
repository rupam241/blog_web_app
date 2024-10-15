import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-slate-400 w-full mt-auto fixed bottom-0">
      <div className="p-10 flex items-center justify-between">
        <div>
          <h1>My Logo</h1>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="mb-4 text-slate-600 text-lg">Company</h1>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li>Affiliate Programme</li>
            <li>Press Kit</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="mb-4 text-slate-600 text-lg">Support</h1>
          <ul>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li>Contact Us</li>
            <li>Customer Support</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="mb-4 text-slate-600 text-lg">Legals</h1>
          <ul>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li>Licensing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
