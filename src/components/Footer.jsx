import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const subscribe = (e) => {
    e.preventDefault();
    if (email.trim()) { setDone(true); setEmail(""); }
  };
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div>
            <h2 className="site-footer__brand">Funiro.</h2>
            <address className="site-footer__address">400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</address>
          </div>
          <div>
            <h3 className="site-footer__heading">Links</h3>
            <ul className="site-footer__list">
              <li><Link to="/">Home</Link></li><li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li><li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="site-footer__heading">Help</h3>
            <ul className="site-footer__list">
              <li><Link to="/checkout">Payment Options</Link></li><li><Link to="/cart">Returns</Link></li>
              <li><Link to="/contact">Privacy Policies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="site-footer__heading">Newsletter</h3>
            <form className="newsletter" onSubmit={subscribe}>
              <input type="email" required placeholder="Enter Your Email Address" value={email} onChange={(e) => { setEmail(e.target.value); setDone(false); }} aria-label="Email address" />
              <button type="submit">SUBSCRIBE</button>
            </form>
            {done && <p className="newsletter__ok">Thanks for subscribing!</p>}
          </div>
        </div>
        <p className="site-footer__copy">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
}
