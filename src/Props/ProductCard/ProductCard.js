const ProductCard = ({ title, image, price, description }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px auto" }}>
      <img src={image} className="card-image-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="cars-text text-muted">{description}</p>
        <p className="card-text text-success">{price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
