import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Features from "../components/Features";
import { ChevronDown, StarIcon } from "../components/Icons";
import { useStore } from "../context/StoreContext";
import { getProduct, compareCatalog, products } from "../data/products";
import { compareSpecs, compareSections } from "../data/compare";
import { fmtPrice } from "../utils/format";

const options = [...compareCatalog, ...products];

export default function Compare() {
  const { compare, addToCompare, removeFromCompare, addToCart, openCart } = useStore();
  // two comparison columns, as in the design
  const shown = compare.map(getProduct).filter(Boolean).slice(-2);
  const columns = [shown[0], shown[1]];
  const spec = (p, section, label) => (p ? compareSpecs[p.id]?.[section]?.[label] ?? "Not available" : "");

  return (
    <>
      <PageBanner title="Product Comparison" crumb="Comparison" />
      <div className="compare-scroll">
        <div className="compare">
          <div className="compare__grid compare__top">
            <div className="compare__cell compare__intro">
              <div><h2>Go to Product page for more Products</h2><Link to="/shop">View More</Link></div>
            </div>
            {columns.map((p, i) => (
              <div className="compare__cell compare__product" key={i}>
                {p && (<>
                  <Link to={`/product/${p.id}`} className="compare__img"><img src={p.fit || p.img} alt={p.name} /></Link>
                  <h3>{p.id === 100 ? "Asgaard Sofa" : p.name}</h3>
                  <p className="compare__price">{fmtPrice(p)}</p>
                  <p className="compare__rating">
                    {compareSpecs[p.id]?.rating || "4.5"} <span className="stars"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon half /></span>
                    <i /><small>{compareSpecs[p.id]?.reviews || "Review"}</small>
                  </p>
                  <button className="compare__remove" onClick={() => removeFromCompare(p.id)}>Remove</button>
                </>)}
              </div>
            ))}
            <div className="compare__cell compare__add-inline">
              <h3>Add A Product</h3>
              <div className="compare__select">
                <select value="" onChange={(e) => e.target.value && addToCompare(Number(e.target.value))} aria-label="Choose a Product">
                  <option value="">Choose a Product</option>
                  {options.filter((o) => !compare.includes(o.id)).map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
                </select>
                <ChevronDown size={14} color="#fff" />
              </div>
            </div>
          </div>

          {Object.entries(compareSections).map(([section, labels]) => (
            <div className="compare__section" key={section}>
              <div className="compare__grid">
                <h3 className="compare__label compare__heading">{section}</h3>
                <div className="compare__cell" /><div className="compare__cell" /><div className="compare__cell" />
              </div>
              {labels.map((label) => (
                <div className="compare__grid compare__row" key={label}>
                  <div className="compare__label">{label}</div>
                  {columns.map((p, i) => <div className="compare__cell" key={i}>{spec(p, section, label)}</div>)}
                  <div className="compare__cell" />
                </div>
              ))}
            </div>
          ))}

          <div className="compare__grid compare__buttons">
            <div className="compare__label" />
            {columns.map((p, i) => (
              <div className="compare__cell" key={i}>
                {p && <button className="btn-gold" onClick={() => { addToCart(p.id, 1); openCart(); }}>Add To Cart</button>}
              </div>
            ))}
            <div className="compare__cell" />
          </div>
        </div>
      </div>
      <Features />
    </>
  );
}
