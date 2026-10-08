import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import { fmtPrice, fmtRp } from "../utils/format";
import { ShareIcon, CompareIcon, LikeIcon } from "./Icons";

export default function ProductCard({ product: p, layout = "grid" }) {
  const { addToCart, openCart, compare, addToCompare, removeFromCompare, wishlist, toggleWishlist } = useStore();
  const navigate = useNavigate();
  const liked = wishlist.includes(p.id);
  const compared = compare.includes(p.id);

  const add = () => { addToCart(p.id, 1); openCart(); };
  const share = async () => {
    const url = `${window.location.origin}/product/${p.id}`;
    try {
      if (navigator.share) await navigator.share({ title: p.name, url });
      else await navigator.clipboard.writeText(url);
    } catch { /* share dismissed */ }
  };
  const compareClick = () => {
    if (compared) removeFromCompare(p.id);
    else { addToCompare(p.id); navigate("/compare"); }
  };

  return (
    <article className={`product-card ${layout === "list" ? "product-card--list" : ""}`}>
      <Link to={`/product/${p.id}`} className="product-card__media" aria-label={p.name}>
        <img src={p.img} alt={p.name} loading="lazy" />
        {p.badge && <span className={`badge-circle ${p.badge === "New" ? "badge-circle--new" : "badge-circle--sale"}`}>{p.badge}</span>}
      </Link>
      <div className="product-card__body">
        <h3 className="product-card__name">{p.name}</h3>
        <p className="product-card__desc">{p.desc}</p>
        <p className="product-card__price"><strong>{fmtPrice(p)}</strong>{p.old && <s>{fmtRp(p.old)}</s>}</p>
      </div>
      <div className="product-card__overlay" onClick={(e) => e.target === e.currentTarget && navigate(`/product/${p.id}`)}>
        <button className="product-card__add" onClick={add}>Add to cart</button>
        <div className="product-card__actions">
          <button onClick={share}><ShareIcon /> Share</button>
          <button onClick={compareClick}><CompareIcon /> {compared ? "Remove" : "Compare"}</button>
          <button onClick={() => toggleWishlist(p.id)}><LikeIcon filled={liked} /> {liked ? "Liked" : "Like"}</button>
        </div>
      </div>
    </article>
  );
}
