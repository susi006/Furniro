// Comparison details for the Furniro demo catalog.
// The extra fields below are presentation data used by the comparison UI so every
// selectable furniture item has a complete set of useful specifications.
const details = {
  1: { brand: "Furniro", width: 80, height: 75, depth: 50, weight: 8, colour: "White", material: "Engineered Wood", stock: 32, min: 1, warranty: "1 year warranty", shipping: "Ships in 2-3 days", returns: "30 days return policy" },
  2: { brand: "Furniro", width: 82, height: 76, depth: 52, weight: 9, colour: "Black", material: "Metal & Fabric", stock: 24, min: 1, warranty: "1 year warranty", shipping: "Ships in 2-3 days", returns: "30 days return policy" },
  3: { brand: "Furniro", width: 220, height: 85, depth: 95, weight: 42, colour: "Light Grey", material: "Fabric & Wood", stock: 18, min: 1, warranty: "2 year warranty", shipping: "Ships in 5-7 days", returns: "30 days return policy" },
  4: { brand: "Furniro", width: 120, height: 75, depth: 60, weight: 18, colour: "Natural", material: "Solid Wood", stock: 27, min: 1, warranty: "1 year warranty", shipping: "Ships in 3-5 days", returns: "30 days return policy" },
  5: { brand: "Furniro", width: 25, height: 45, depth: 25, weight: 3, colour: "Black", material: "Metal", stock: 41, min: 1, warranty: "1 year warranty", shipping: "Ships in 2-3 days", returns: "30 days return policy" },
  6: { brand: "Furniro", width: 12, height: 10, depth: 12, weight: 1, colour: "White", material: "Ceramic", stock: 65, min: 2, warranty: "6 months warranty", shipping: "Ships in 1-2 days", returns: "15 days return policy" },
  7: { brand: "Furniro", width: 200, height: 35, depth: 220, weight: 28, colour: "Beige", material: "Cotton & Fabric", stock: 16, min: 1, warranty: "1 year warranty", shipping: "Ships in 3-5 days", returns: "30 days return policy" },
  8: { brand: "Furniro", width: 28, height: 30, depth: 28, weight: 2, colour: "White", material: "Ceramic", stock: 50, min: 1, warranty: "6 months warranty", shipping: "Ships in 1-2 days", returns: "15 days return policy" },
  100: { brand: "Furniro", width: 220, height: 90, depth: 95, weight: 45, colour: "Beige", material: "Fabric & Wood", stock: 12, min: 1, warranty: "2 year warranty", shipping: "Ships in 5-7 days", returns: "30 days return policy" },
  101: { brand: "Furniro", width: 180, height: 80, depth: 85, weight: 35, colour: "Brown", material: "Solid Wood", stock: 20, min: 1, warranty: "2 year warranty", shipping: "Ships in 4-6 days", returns: "30 days return policy" },
  102: { brand: "Furniro", width: 210, height: 82, depth: 90, weight: 38, colour: "Grey", material: "Fabric & Wood", stock: 14, min: 1, warranty: "2 year warranty", shipping: "Ships in 5-7 days", returns: "30 days return policy" },
};

export const compareSpecs = Object.fromEntries(
  Object.entries(details).map(([id, d]) => [Number(id), {
    rating: id === "100" ? "4.7" : id === "102" ? "4.5" : "4.5",
    reviews: id === "100" ? "204 Review" : "128 Review",
    General: {
      Brand: d.brand,
      Category: "Furniture",
      SKU: `FUR-${id}`,
    },
    Dimensions: {
      Width: `${d.width} cm`,
      Height: `${d.height} cm`,
      Depth: `${d.depth} cm`,
      Weight: `${d.weight} kg`,
      Colour: d.colour,
      Material: d.material,
    },
    Product: {
      Stock: String(d.stock),
      "Availability Status": "In Stock",
      "Minimum Order Quantity": String(d.min),
    },
    Warranty: {
      Warranty: d.warranty,
      Shipping: d.shipping,
      "Return Policy": d.returns,
    },
  }])
);

export const compareSections = {
  General: ["Brand", "Category", "SKU"],
  Dimensions: ["Width", "Height", "Depth", "Weight", "Colour", "Material"],
  Product: ["Stock", "Availability Status", "Minimum Order Quantity"],
  Warranty: ["Warranty", "Shipping", "Return Policy"],
};
