import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DUMMY_JSON_BASE_URL } from "../constants";
import Carousel from "../components/Carousel";

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductDetails();

    // eslint-disable-next-line
  }, []);

  const getProductDetails = async () => {
    const URL = `${DUMMY_JSON_BASE_URL}/products/${id}`;

    try {
      const response = await axios.get(URL);

      setProduct(response.data);

      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    !!Object.keys(product).length && (
      <div className="container py-4">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <Carousel images={product.images} />
          </div>

          <div className="col-sm-12 col-lg-6">
            <div className="product-details">
              <h2 className="product-details__title">{product.title}</h2>
              <p className="product-details__description">
                {product.description}
              </p>
              <span className="product-details__rating">
                Rating - {product.rating}
              </span>
              <p className="product-details__price">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SingleProduct;
