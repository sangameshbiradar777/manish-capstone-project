import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DUMMY_JSON_BASE_URL } from "../constants";
import Product from "./Product";

const CategorySection = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategoryTopProducts();

    // eslint-disable-next-line
  }, []);

  const getCategoryTopProducts = async () => {
    const URL = `${DUMMY_JSON_BASE_URL}/products/category/${category}`;

    try {
      const response = await axios.get(URL);

      console.log(response.data);

      setProducts(response.data.products.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  const getProductCols = () => {
    return products.map((product) => (
      <div className="col-sm-3 col--product" key={product.id}>
        <Product product={product} />
      </div>
    ));
  };

  const getCategoryName = (category) => {
    const words = category.split("-");
    const name = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return name;
  };

  return (
    <section className="category-section mb-4">
      <div className="row">
        <div className="col-sm-3">
          <div className="section-description">
            <p className="h6">{getCategoryName(category)}</p>
            <Link to={`/${category}`}>
              <button type="button" className="btn btn-primary">
                View All
              </button>
            </Link>
          </div>
        </div>

        {getProductCols()}
      </div>
    </section>
  );
};

export default CategorySection;
