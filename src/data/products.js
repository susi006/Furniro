// All images come from /src/assets/img (extracted from the Figma design)
import syltherine from "../assets/img/syltherine.webp";
import leviosa from "../assets/img/leviosa.webp";
import lolito from "../assets/img/lolito.webp";
import respira from "../assets/img/respira.webp";
import grifo from "../assets/img/grifo.webp";
import muggo from "../assets/img/muggo.webp";
import pingky from "../assets/img/pingky.webp";
import potty from "../assets/img/potty.webp";
import asgaardImg from "../assets/img/asgaard-sofa.webp";
import casalivingImg from "../assets/img/casaliving-wood.webp";
import outdoorImg from "../assets/img/outdoor-sofa-set.webp";
import thumbSet from "../assets/img/thumb-set.webp";
import sofaSmall from "../assets/img/sofa-small.webp";
import sofaBeige from "../assets/img/sofa-beige.webp";
// Same pictures cropped to the product (no transparent padding) so they fill their containers
import asgaardFit from "../assets/img/fit/asgaard-sofa.webp";
import outdoorFit from "../assets/img/fit/outdoor-sofa-set.webp";
import thumbSetFit from "../assets/img/fit/thumb-set.webp";
import sofaSmallFit from "../assets/img/fit/sofa-small.webp";
import sofaBeigeFit from "../assets/img/fit/sofa-beige.webp";

// Shop / Home / Related products ("Rp" prices on the cards)
export const products = [
  { id: 1, name: "Syltherine", desc: "Stylish cafe chair", price: 2500000, old: 3500000, badge: "-30%", img: syltherine },
  { id: 2, name: "Leviosa", desc: "Stylish cafe chair", price: 2500000, img: leviosa },
  { id: 3, name: "Lolito", desc: "Luxury big sofa", price: 7000000, old: 14000000, badge: "-50%", img: lolito },
  { id: 4, name: "Respira", desc: "Outdoor bar table and stool", price: 500000, badge: "New", img: respira },
  { id: 5, name: "Grifo", desc: "Night lamp", price: 1500000, img: grifo },
  { id: 6, name: "Muggo", desc: "Small mug", price: 150000, badge: "New", img: muggo },
  { id: 7, name: "Pingky", desc: "Cute bed set", price: 7000000, old: 14000000, badge: "-50%", img: pingky },
  { id: 8, name: "Potty", desc: "Minimalist flower pot", price: 500000, badge: "New", img: potty },
];

// Products shown on the Product / Cart / Comparison screens ("Rs." prices)
export const sofa = {
  id: 100, name: "Asgaard sofa", price: 250000, currency: "rs", img: asgaardImg, fit: asgaardFit,
  category: "Sofas", sku: "SS001", tags: "Sofa, Chair, Home, Shop",
  gallery: [thumbSetFit, outdoorFit, sofaSmallFit, sofaBeigeFit],
};
export const wood = { id: 101, name: "Casaliving Wood", price: 270000, currency: "rs", img: casalivingImg, category: "Sofas" };
export const outdoorSet = { id: 102, name: "Outdoor Sofa Set", price: 224000, currency: "rs", img: outdoorImg, fit: outdoorFit, category: "Sofas" };

export const asgaardSofa = sofa;
export const homeProducts = products;
export const compareCatalog = [sofa, outdoorSet];

export const getProduct = (id) => {
  const n = Number(id);
  return [sofa, wood, outdoorSet].find((p) => p.id === n) || products.find((p) => p.id === n);
};
