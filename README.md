# Furniro (React + Vite + Bootstrap + React Router)

    npm install
    npm run dev       # http://localhost:5173
    npm run build

## Routes
/ · /shop · /product/:id · /compare · /cart · /checkout · /blog · /contact · /about (no About design exists, so it shows the banner + benefits strip)

## Structure
- `src/components` – Header, Footer, Layout, PageBanner, Features, ProductCard, ProductGrid, Pagination, CartSidebar, Icons
- `src/pages` – one file per screen
- `src/context/StoreContext.jsx` – cart, wishlist, compare and drawer state (cart / wishlist / compare persist in localStorage)
- `src/data` – products, blog, compare specs
- `src/assets/index.js` – single place that imports shared images / icons
- `src/styles` – base, layout, components, pages (plain CSS on top of Bootstrap)
