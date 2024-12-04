import { useMemo } from "react";

function ProductList({ products, searchTerm, onAddToCart }) {
  const filteredProducts = useMemo(() => {
    console.log("product");
    if (!searchTerm.trim()) {
      return products;
    }

    return products.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm, products]);
  // console.log(filteredProducts);

  const sortedProducts = useMemo(() => {
    return filteredProducts.sort((a, b) => a.price - b.price);
  }, [filteredProducts]);

  // console.log(sortedProducts);

  return (
    <div>
      <h2>Products</h2>
      <div className="row">
        {sortedProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.image}
                className="card-image-top"
                alt={product.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p>${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => onAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
