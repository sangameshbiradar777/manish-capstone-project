const Carousel = ({ images }) => {
  console.log(images);
  const getCarouselInnerEls = () => {
    return images.map((carouselItem, index) => (
      <div
        key={index}
        className={`carousel-item ${index === 0 ? "active" : ""}`}
      >
        <img
          src={carouselItem.image || carouselItem}
          className="d-block w-100"
          alt="Carousel Banner"
        />
      </div>
    ));
  };

  const getCarouselIndicators = () => {
    return images.map((_, index) => (
      <button
        type="button"
        key={index}
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={index}
        className={`${index === 0 ? "active" : ""}`}
        aria-current={index === 0 ? true : false}
        aria-label={`Carousel Image ${index + 1}`}
      ></button>
    ));
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">{getCarouselIndicators()}</div>
      <div className="carousel-inner">{getCarouselInnerEls()}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
