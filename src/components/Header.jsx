import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import { logo, iconUser, iconSearch, iconHeart, iconCart } from "../assets";

const links = [["/", "Home"], ["/shop", "Shop"], ["/about", "About"], ["/contact", "Contact"]];

export default function Header() {
  const { cartItems, wishlist, openCart } = useStore();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const count = cartItems.reduce((n, i) => n + i.qty, 0);

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(`/shop?q=${encodeURIComponent(q.trim())}`);
    setSearchOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <Link to="/" className="brand" onClick={() => setMenu(false)}>
          <img className="brand__logo" src={logo} alt="" />
          <span className="brand__name">Furniro</span>
        </Link>

        <nav className={`site-nav ${menu ? "is-open" : ""}`} aria-label="Main">
          {links.map(([to, label]) => (
            <NavLink key={label} to={to} end onClick={() => setMenu(false)}>{label}</NavLink>
          ))}
        </nav>

        <div className="site-header__icons">
          <Link to="/contact" className="icon-btn" aria-label="Account"><img src={iconUser} alt="" /></Link>
          <button className="icon-btn" aria-label="Search" onClick={() => setSearchOpen((v) => !v)}><img src={iconSearch} alt="" /></button>
          <Link to="/shop?liked=1" className="icon-btn" aria-label="Wishlist">
            <img src={iconHeart} alt="" />{wishlist.length > 0 && <span className="icon-btn__dot" />}
          </Link>
          <button className="icon-btn" aria-label={`Cart (${count})`} onClick={openCart}>
            <img src={iconCart} alt="" />{count > 0 && <span className="icon-btn__dot" />}
          </button>
          <button className="nav-toggle" aria-label="Menu" onClick={() => setMenu((v) => !v)}><span /><span /><span /></button>
        </div>
      </div>

      {searchOpen && (
        <form className="header-search" onSubmit={submitSearch}>
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" aria-label="Search products" />
          <button type="submit">Search</button>
        </form>
      )}
    </header>
  );
}
