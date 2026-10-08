// Gold active square + cream squares + "Next" button (Shop and Blog)
export default function Pagination({ page, pages, onChange }) {
  return (
    <nav className="pagination-bar" aria-label="Pagination">
      {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
        <button key={n} className={n === page ? "is-active" : ""} onClick={() => onChange(n)} aria-current={n === page ? "page" : undefined}>
          {n}
        </button>
      ))}
      <button className="pagination-bar__next" onClick={() => onChange(Math.min(pages, page + 1))} disabled={page === pages}>
        Next
      </button>
    </nav>
  );
}
