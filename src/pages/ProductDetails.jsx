import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { ChevronRight, StarIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from "../components/Icons";
import { useStore } from "../context/StoreContext";
import { getProduct, sofa, products } from "../data/products";
import { fmtPrice } from "../utils/format";
import { sofaWhite, sofaWhiteL } from "../assets";

const colors = ["#816DFA", "#000000", "#B88E2F"];
const sizes = ["L", "XL", "XS"];
const tabs = ["Description", "Additional Information", "Reviews [5]"];
const intro = "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, openCart, addToCompare } = useStore();
  const product = getProduct(id) || sofa;
  const gallery = product.gallery || [];

  const [mainImg, setMainImg] = useState(product.fit || product.img);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("L");
  const [color, setColor] = useState(colors[0]);
  const [tab, setTab] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // reset the local state when moving between products
  useEffect(() => { setMainImg(product.fit || product.img); setQty(1); setTab(0); setShowMore(false); }, [product]);

  const related = (showMore ? products : products.slice(0, 4)).filter((p) => p.id !== product.id);
  const sku = product.sku || `SS00${product.id}`;
  const category = product.category || "Sofas";
  const tags = product.tags || `${category}, Home, Shop`;

  return (
    <>
      <section className="crumb-strip">
        <div className="crumb-strip__inner">
          <Link to="/">Home</Link><ChevronRight size={16} color="#000" />
          <Link to="/shop">Shop</Link><ChevronRight size={16} color="#000" />
          <span className="crumb-strip__bar" /><b>{product.name}</b>
        </div>
      </section>

      <section className="pdp">
        <div className="pdp__gallery">
          {gallery.length > 0 && (
            <div className="pdp__thumbs">
              {gallery.map((g, i) => (
                <button key={i} className={g === mainImg ? "is-active" : ""} onClick={() => setMainImg(g)} aria-label={`View image ${i + 1}`}><img src={g} alt="" /></button>
              ))}
            </div>
          )}
          <div className="pdp__main"><img src={mainImg} alt={product.name} /></div>
        </div>

        <div className="pdp__info">
          <h1>{product.name}</h1>
          <p className="pdp__price">{fmtPrice(product)}</p>
          <div className="pdp__rating">
            <span className="pdp__stars"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon half /></span>
            <span className="pdp__rating-sep" /><span>5 Customer Review</span>
          </div>
          <p className="pdp__intro">{intro}</p>

          <p className="pdp__label">Size</p>
          <div className="pdp__sizes">{sizes.map((s) => <button key={s} className={s === size ? "is-active" : ""} onClick={() => setSize(s)}>{s}</button>)}</div>
          <p className="pdp__label">Color</p>
          <div className="pdp__colors">{colors.map((c) => <button key={c} className={c === color ? "is-active" : ""} style={{ background: c }} onClick={() => setColor(c)} aria-label={`Color ${c}`} />)}</div>

          <div className="pdp__actions">
            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">-</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">+</button>
            </div>
            <button className="btn-outline-dark-lg" onClick={() => { addToCart(product.id, qty); openCart(); }}>Add To Cart</button>
            <button className="btn-outline-dark-lg" onClick={() => { addToCompare(product.id); navigate("/compare"); }}>+ Compare</button>
          </div>

          <hr />
          <dl className="pdp__meta">
            <div><dt>SKU</dt><dd>{sku}</dd></div>
            <div><dt>Category</dt><dd>{category}</dd></div>
            <div><dt>Tags</dt><dd>{tags}</dd></div>
            <div><dt>Share</dt><dd className="pdp__share">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><TwitterIcon /></a>
            </dd></div>
          </dl>
        </div>
      </section>

      <section className="pdp-tabs">
        <div className="pdp-tabs__nav">{tabs.map((t, i) => <button key={t} className={i === tab ? "is-active" : ""} onClick={() => setTab(i)}>{t}</button>)}</div>
        <div className="pdp-tabs__body">
          {tab === 0 && (<>
            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          </>)}
          {tab === 1 && (
            <dl className="pdp-tabs__info">
              <div><dt>Size</dt><dd>{sizes.join(", ")}</dd></div>
              <div><dt>Category</dt><dd>{category}</dd></div>
              <div><dt>SKU</dt><dd>{sku}</dd></div>
            </dl>
          )}
          {tab === 2 && <p>5 Customer Review</p>}
        </div>
      </section>

      <section className="pdp-images">
        <div><img src={sofaWhite} alt="Cream sofa" /></div>
        <div><img src={sofaWhiteL} alt="Cream sectional sofa" /></div>
      </section>

      <section className="related">
        <h2 className="section-title section-title--lg">Related Products</h2>
        <ProductGrid products={related.slice(0, showMore ? 8 : 4)} />
        <div className="text-center">
          {showMore ? <Link to="/shop" className="btn-outline-gold">Go to Shop</Link>
            : <button className="btn-outline-gold" onClick={() => setShowMore(true)}>Show More</button>}
        </div>
      </section>
    </>
  );
}
