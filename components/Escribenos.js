const Escribenos = () => {
    return (
        <>
            <h3 className="text-center text-white">Escribenos</h3>
            <div className="row d-flex justify-content-center">
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" id="nombres" className="form-control form-control-sm" placeholder="Nombre(s)"/>
                            </div>
                        </div>
                        <div className="col-nd-6">
                            <div className="form-group">
                                <input type="text" id="apellidos" className="form-control form-control-sm" placeholder="Apellidos" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" className="form-control form-control-sm" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="email" id="telefono" className="form-control form-control-sm" placeholder="Teléfono" />
                    </div>
                    <button type="submit" className="btn btn-outline-success btn-sm btn-block mb-4">
                        Enviar
                    </button>
                </form>
            </div>
        </>
    )
}

export default Escribenos;