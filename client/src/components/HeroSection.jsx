import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
    return (
        <section id="hero-section" className="my-4">
            <div className="container">
                <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#heroCarousel" data-bs-slide-to="1"></li>
                        <li data-bs-target="#heroCarousel" data-bs-slide-to="2"></li>
                    </ol>

                    {/* Slides */}
                    <div className="carousel-inner">
                        <div className="carousel-item active position-relative">
                            <img src="/img1.jpg" className="d-block w-100 hero-img" alt="Slide 1" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Slide Title 1</h5>
                                <p>Description for Slide 1.</p>
                            </div>
                        </div>
                        <div className="carousel-item position-relative">
                            <img src="/img2.jpg" className="d-block w-100 hero-img" alt="Slide 2" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Slide Title 2</h5>
                                <p>Description for Slide 2.</p>
                            </div>
                        </div>
                        <div className="carousel-item position-relative">
                            <img src="/img3.jpg" className="d-block w-100 hero-img" alt="Slide 3" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Slide Title 3</h5>
                                <p>Description for Slide 3.</p>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
