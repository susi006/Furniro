import { Link, Navigate, useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Features from "../components/Features";
import { UserSmall, CalendarSmall, TagSmall } from "../components/Icons";
import { posts, blogCategories, recentPosts } from "../data/blog";

export default function BlogPost() {
  const { id } = useParams();
  const index = posts.findIndex((p) => String(p.id) === id);
  if (index < 0) return <Navigate to="/blog" replace />;
  const post = posts[index];
  const prev = posts[index - 1];
  const next = posts[index + 1];

  return (
    <>
      <PageBanner title="Blog" crumb={post.title} />
      <section className="blog">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-8">
            <article className="post post--single">
              <img src={post.img} alt={post.title} />
              <ul className="post__meta">
                <li><UserSmall /> {post.author}</li><li><CalendarSmall /> {post.date}</li><li><TagSmall /> {post.tag}</li>
              </ul>
              <h2>{post.title}</h2>
              <p>{post.text}</p>
              <p>{post.text}</p>
              <Link to="/blog" className="post__more">Back to Blog</Link>
              <div className="post__nav">
                {prev ? <Link to={`/blog/${prev.id}`}>&lsaquo; {prev.title}</Link> : <span />}
                {next ? <Link to={`/blog/${next.id}`}>{next.title} &rsaquo;</Link> : <span />}
              </div>
            </article>
          </div>
          <aside className="col-lg-4">
            <div className="blog-side">
              <h3>Categories</h3>
              <div className="blog-cats">
                {blogCategories.map((c) => (
                  <Link key={c.name} to="/blog"><span>{c.name}</span><span>{c.count}</span></Link>
                ))}
              </div>
              <h3>Recent Posts</h3>
              <ul className="recent">
                {recentPosts.map((r, i) => {
                  const target = posts[i];
                  const inner = (<><img src={r.img} alt="" /><div><p>{r.title}</p><small>{r.date}</small></div></>);
                  return <li key={r.title}>{target ? <Link to={`/blog/${target.id}`} className="recent__link">{inner}</Link> : inner}</li>;
                })}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <Features />
    </>
  );
}
