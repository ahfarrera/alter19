const Carousel = () => {
    return (
        <div id="carouselUno" className="carousel slide carousel-fade" data-ride="carousel" style={{height: ""}}>
            <ol className="carousel-indicators">
                <li data-target="#carouselUno" data-slide-to="0" className="active"></li>
                <li data-target="#carouselUno" data-slide-to="1"></li>
                <li data-target="#carouselUno" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="10000">
                    <img src="images/03.jpg" className="d-block w-100"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Le damos crédito a tus sueños</h3>
                        <p>Queremos impulsarte para que logres todos tus objetivos</p>
                    </div>
                </div>
                <div className="carousel-item" data-interval="10000">
                    <img src="images/04.jpg" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Queremos que tu negocio crezca</h3>
                        <p>Las posibilidades de éxito aumentan estando unidos</p>
                    </div>
                </div>
                <div className="carousel-item" data-interval="10000">
                    <img src="images/05.jpg" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Un camino de sueños un mundo de oportunidades</h3>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselUno" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselUno" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;