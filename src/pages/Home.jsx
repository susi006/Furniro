import { useState } from "react";
import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";
import { posts } from "../data/blog";
import { hero, rangeDining, rangeLiving, rangeBedroom, roomInnerPeace, roomTwo, collage } from "../assets";

const range = [["Dining", rangeDining], ["Living", rangeLiving], ["Bedroom", rangeBedroom]];
// The design shows one captioned slide plus the next slide cropped at the edge
const rooms = [
  { label: "Bed Room", title: "Inner Peace", img: roomInnerPeace },
  { label: "Living Room", title: "Bright Corner", img: roomTwo },
  { label: "Bed Room", title: "Inner Peace", img: roomInnerPeace },
  { label: "Living Room", title: "Bright Corner", img: roomTwo },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const next = () => setActive((a) => (a + 1) % rooms.length);
  // the active slide is always rendered first so it sits at the left of the slider
  const ordered = rooms.map((r, i) => ({ ...r, index: i })).sort((a, b) => ((a.index - active + rooms.length) % rooms.length) - ((b.index - active + rooms.length) % rooms.length));

  return (
    <>
      <section className="hero" style={{ "--hero-img": `url(${hero})` }}>
        <div className="hero__card">
          <p className="hero__eyebrow">New Arrival</p>
          <h1>Discover Our<br />New Collection</h1>
          <p className="hero__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <Link to="/shop" className="btn-gold hero__btn">BUY NOW</Link>
        </div>
      </section>

      <section className="range">
        <div className="section-head"><h2>Browse The Range</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <div className="range__grid">
          {range.map(([name, img]) => (
            <Link to="/shop" className="range__item" key={name}><img src={img} alt={name} /><h3>{name}</h3></Link>
          ))}
        </div>
      </section>

      <section className="home-products">
        <h2 className="section-title">Our Products</h2>
        <ProductGrid products={products} />
        <div className="text-center"><Link to="/shop" className="btn-outline-gold">Show More</Link></div>
      </section>

      <section className="rooms">
        <div className="rooms__intro">
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
          <Link to="/shop" className="btn-gold">Explore More</Link>
        </div>
        <div className="rooms__slider">
          <div className="rooms__track">
            {ordered.map((r, pos) => (
              <figure key={r.index} className={`rooms__slide ${pos === 0 ? "is-active" : ""}`} onClick={() => setActive(r.index)}>
                <img src={r.img} alt={r.title} />
                {pos === 0 && (
                  <figcaption>
                    <p>{String(r.index + 1).padStart(2, "0")} <i /> {r.label}</p>
                    <h3>{r.title}</h3>
                    <Link to="/shop" className="rooms__go" aria-label={`Explore ${r.title}`}>&rarr;</Link>
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
          <button className="rooms__arrow" onClick={next} aria-label="Next slide">&rsaquo;</button>
          <div className="rooms__dots">
            {rooms.map((_, i) => <button key={i} className={i === active ? "is-active" : ""} onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`} />)}
          </div>
        </div>
      </section>

      <section className="home-blog">
        <div className="section-head"><h2>Our Blogs</h2><p>Find inspiration and ideas for your home.</p></div>
        <div className="home-blog__grid">
          {posts.map((post) => (
            <article className="home-blog__card" key={post.id}>
              <img src={post.img} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <Link to="/blog" className="post__more">Read More</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="share">
        <p className="share__eyebrow">Share your setup with</p>
        <h2 className="share__tag">#FuniroFurniture</h2>
        <div className="collage">
          {collage.map(([src, l, t, w, h], i) => (
            <img key={i} src={src} alt="Customer setup" style={{ "--l": `${l}%`, "--t": `${t}%`, "--w": `${w}%`, "--h": `${h}%` }} />
          ))}
        </div>
      </section>
    </>
  );
}
