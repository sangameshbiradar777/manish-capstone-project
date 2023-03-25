import axios from "axios";
import { useParams } from "react-router-dom";
import { DUMMY_JSON_BASE_URL } from "../constants";
import { useState, useEffect } from "react";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getCategoryProducts();

    // eslint-disable-next-line
  }, []);

  const getCategoryProducts = async () => {
    const URL = `${DUMMY_JSON_BASE_URL}/products/category/${category}?limit=10`;

    try {
      const response = await axios.get(URL);

      setProducts(response.data.products);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-sm-3">Sidebar</div>

        <div className="col-sm-9">
          <div className="row">
            {products.map((product) => (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4 mr-4">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
