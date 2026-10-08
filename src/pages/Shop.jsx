import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import Features from "../components/Features";
import { FilterIcon, GridIcon, ListIcon } from "../components/Icons";
import { useStore } from "../context/StoreContext";
import { products } from "../data/products";

// The design shows 32 results; the 8 catalogue products repeat to fill them
const catalogue = Array.from({ length: 32 }, (_, i) => products[i % products.length]);
const filters = [["all", "All"], ["sale", "On sale"], ["new", "New"]];
const sorts = [["default", "Default"], ["low", "Price: low to high"], ["high", "Price: high to low"], ["name", "Name"]];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const { wishlist } = useStore();
  const q = (params.get("q") || "").trim().toLowerCase();
  const likedOnly = params.get("liked") === "1";

  const [page, setPage] = useState(1);
  const [show, setShow] = useState(16);
  const [sort, setSort] = useState("default");
  const [filter, setFilter] = useState("all");
  const [menu, setMenu] = useState(false);
  const [layout, setLayout] = useState("grid");

  const list = useMemo(() => {
    let l = catalogue.filter((p) => !q || `${p.name} ${p.desc}`.toLowerCase().includes(q));
    if (likedOnly) l = l.filter((p) => wishlist.includes(p.id));
    if (filter === "sale") l = l.filter((p) => p.old);
    if (filter === "new") l = l.filter((p) => p.badge === "New");
    if (sort === "low") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "high") l = [...l].sort((a, b) => b.price - a.price);
    if (sort === "name") l = [...l].sort((a, b) => a.name.localeCompare(b.name));
    return l;
  }, [q, likedOnly, wishlist, filter, sort]);

  const perPage = Math.max(1, show);
  const pages = Math.max(1, Math.ceil(list.length / perPage));
  const current = Math.min(page, pages);
  const from = (current - 1) * perPage;
  const view = list.slice(from, from + perPage);
  const reset = (fn) => (v) => { fn(v); setPage(1); };

  return (
    <>
      <PageBanner title="Shop" />
      <section className="shop-toolbar">
        <div className="shop-toolbar__inner">
          <div className="shop-toolbar__left">
            <div className="filter-wrap">
              <button className="shop-toolbar__filter" onClick={() => setMenu((m) => !m)} aria-expanded={menu}><FilterIcon /> Filter</button>
              {menu && (
                <div className="filter-menu">
                  {filters.map(([k, label]) => (
                    <button key={k} className={filter === k ? "is-active" : ""} onClick={() => { reset(setFilter)(k); setMenu(false); }}>{label}</button>
                  ))}
                </div>
              )}
            </div>
            <button className={`view-btn ${layout === "grid" ? "is-active" : ""}`} onClick={() => setLayout("grid")} aria-label="Grid view"><GridIcon /></button>
            <button className={`view-btn ${layout === "list" ? "is-active" : ""}`} onClick={() => setLayout("list")} aria-label="List view"><ListIcon /></button>
            <span className="shop-toolbar__divider" />
            <span className="shop-toolbar__count">Showing {list.length ? from + 1 : 0}–{Math.min(from + perPage, list.length)} of {list.length} results</span>
          </div>
          <div className="shop-toolbar__right">
            <label>Show
              <input type="number" min="1" max="32" value={show} onChange={(e) => reset(setShow)(Math.min(32, Math.max(1, Number(e.target.value) || 16)))} />
            </label>
            <label>Sort by
              <select value={sort} onChange={(e) => reset(setSort)(e.target.value)}>
                {sorts.map(([k, label]) => <option key={k} value={k}>{label}</option>)}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="shop-list">
        {(q || likedOnly) && (
          <p className="shop-list__note">
            {likedOnly ? "Showing your liked products" : <>Results for “{params.get("q")}”</>}{" "}
            <button onClick={() => setParams({})}>Clear</button>
          </p>
        )}
        {view.length ? <ProductGrid products={view} layout={layout} /> : <p className="shop-list__note">No products found. <Link to="/shop" onClick={() => setParams({})}>Show all</Link></p>}
        {pages > 1 && <Pagination page={current} pages={pages} onChange={setPage} />}
      </section>
      <Features />
    </>
  );
}
