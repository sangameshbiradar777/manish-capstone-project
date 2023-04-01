import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="card card--product">
        <div className="card--product__img-container">
          <img
            src={product.images[0]}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
