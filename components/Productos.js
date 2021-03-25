const Productos = ({users}) => {
    return (
        <>
            <div className="row bg-success m-5 px-5 pt-5 pb-4 shadow p-3 mb-5 rounded">
                <div className="col-md-9">
                    <h1 className="text-light">Nuestros Créditos</h1>
                </div>
                <div className="col-md-3">
                    <button type="submit" className="btn btn-lg btn-primary btn-block">
                        SOLICITA TU CRÉDITO
                    </button>
                </div>
            </div>
            <div className="card-deck m-5">
            {   
                users.map(user => (
                    <div className="col mb-4" key={user.id}>
                        <div className="card h-100">
                            <img src={user.image} className="card-img-top" height="250px"/>
                            <div className="card-body bg-light">
                                <h4 className="card-title text-center text-success border-bottom border-secondary">{user.title}</h4>
                                <p className="card-text text-justify">{user.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </>
    )
}

export default Productos;