import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Features from "../components/Features";
import Pagination from "../components/Pagination";
import { UserSmall, CalendarSmall, TagSmall, SearchSmall } from "../components/Icons";
import { posts, blogCategories, recentPosts } from "../data/blog";

export default function Blog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(null);
  const [page, setPage] = useState(1);

  const list = useMemo(
    () => posts.filter((p) => p.title.toLowerCase().includes(q.trim().toLowerCase()) && (!cat || p.tag === cat)),
    [q, cat]
  );

  return (
    <>
      <PageBanner title="Blog" />
      <section className="blog">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-8">
            {list.map((p) => (
              <article className="post" key={p.id}>
                <Link to={`/blog/${p.id}`}><img src={p.img} alt={p.title} /></Link>
                <ul className="post__meta">
                  <li><UserSmall /> {p.author}</li><li><CalendarSmall /> {p.date}</li><li><TagSmall /> {p.tag}</li>
                </ul>
                <h2><Link to={`/blog/${p.id}`}>{p.title}</Link></h2>
                <p>{p.text}</p>
                <Link to={`/blog/${p.id}`} className="post__more">Read more</Link>
              </article>
            ))}
            {list.length === 0 && <p className="blog__empty">No posts found.</p>}
            <Pagination page={page} pages={3} onChange={setPage} />
          </div>

          <aside className="col-lg-4">
            <div className="blog-side">
              <div className="blog-search">
                <input value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search posts" />
                <SearchSmall />
              </div>
              <h3>Categories</h3>
              <div className="blog-cats">
                {blogCategories.map((c) => (
                  <button key={c.name} className={cat === c.name ? "is-active" : ""} onClick={() => setCat(cat === c.name ? null : c.name)}>
                    <span>{c.name}</span><span>{c.count}</span>
                  </button>
                ))}
              </div>
              <h3>Recent Posts</h3>
              <ul className="recent">
                {recentPosts.map((r) => (
                  <li key={r.title}><img src={r.img} alt="" /><div><p>{r.title}</p><small>{r.date}</small></div></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <Features />
    </>
  );
}
