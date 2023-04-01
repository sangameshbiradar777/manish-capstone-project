import Carousel from "../components/Carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, DUMMY_JSON_BASE_URL } from "../constants";
import CategorySection from "../components/CategorySection";
import homeCarouselImages from "../data/carouselItems";

const Home = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCarouselItems();
    getCategories();
  }, []);

  const getCarouselItems = async () => {
    const URL = `${BASE_URL}/carouselItems`;
    try {
      const response = await axios.get(URL);

      setCarouselItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    const URL = `${DUMMY_JSON_BASE_URL}/products/categories`;
    try {
      const response = await axios.get(URL);

      console.log(response.data);

      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategorySections = categories.map((category, index) => (
    <CategorySection key={index} category={category} />
  ));

  return (
    <div className="container">
      <div className="carousel-container">
        <Carousel images={homeCarouselImages} />
      </div>

      <div className="py-4">
        <div className="categories">{getCategorySections}</div>
      </div>
    </div>
  );
};

export default Home;
