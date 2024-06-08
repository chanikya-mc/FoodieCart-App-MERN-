import React from 'react';

function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{ height: "500px" }}>
      <div className="carousel-inner" id='carousel' style={{ height: "100%" }}>
        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-white" type="submit">Search</button>
          </form>
        </div>
        <div className="carousel-item active" style={{ height: "100%" }}>
          <img
            src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
            className="d-block w-100"
            style={{ filter: "brightness(50%)", objectFit: "cover", height: "100%" }}
            alt="..."
          />
        </div>
        <div className="carousel-item" style={{ height: "100%" }}>
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            style={{ filter: "brightness(50%)", objectFit: "cover", height: "100%" }}
            alt="..."
          />
        </div>
        <div className="carousel-item" style={{ height: "100%" }}>
          <img
            src="https://www.jocooks.com/wp-content/uploads/2020/01/antojitos-1-4-1200x1200.jpg"
            className="d-block w-100"
            style={{ filter: "brightness(50%)", objectFit: "cover", height: "100%" }}
            alt="..."
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
