import ProductCard from "./ProductCard";

// 4 columns on desktop, 3 on laptop, 2 on tablet / mobile (the design's 32px gaps are set in CSS)
export default function ProductGrid({ products, layout = "grid" }) {
  return (
    <div className="row product-grid">
      {products.map((p, i) => (
        <div key={`${p.id}-${i}`} className={layout === "list" ? "col-12" : "col-6 col-md-4 col-xl-3"}>
          <ProductCard product={p} layout={layout} />
        </div>
      ))}
    </div>
  );
}
