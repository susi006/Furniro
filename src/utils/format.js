// Grid / card prices in the design use the "Rp 2.500.000" style.
export const fmtRp = (n) => "Rp " + Math.round(n).toLocaleString("id-ID");

// Cart / product-page prices in the design use the "Rs. 250,000.00" style.
export const fmtRs = (n) =>
  "Rs. " + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Card style for catalogue products, Rs style for the Rs products
export const fmtPrice = (p) => (p.currency === "rs" ? fmtRs(p.price) : fmtRp(p.price));
