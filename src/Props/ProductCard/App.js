import ProductCard from "./ProductCard";

const App = () => {
  const products = [
    {
      id: 1,
      title: "Smartphone",
      image: "https://via.placeholder.com/150",
      price: 19999,
      description: "A high-performance smatphone with excellent camera quality",
    },
    {
      id: 2,
      title: "Wireless Headphones",
      image: "https://via.placeholder.com/150",
      price: 2999,
      description: "Comfortable, lightweight, and great sound quality",
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Our Products</h1>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
