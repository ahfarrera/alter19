import Link from 'next/link'

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor: "rgba(0, 31, 63, 0.9)"}}>
            <Link href="/">
                <a className="navbar-brand">
                    <img src="/images/00.png" width="60" height="60" className="img-fluid d-inline-block mr-3"/>
                    <span className="text-success">Tuxtla Poniente</span>
                </a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link href="/preguntas">
                            <a className="nav-link text-light">Preguntas Frecuentes</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/nosotros">
                            <a className="nav-link text-light">Sobre Nosotros</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/blog">
                            <a className="nav-link text-light">Blog</a>
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav list-inline mr-4">
                    <li className="nav-item">
                        <a className="nav-link" href="#" rel="nofollow" target="_blank">
                            <i className="fab fa-youtube text-light"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" rel="nofollow" target="_blank">
                            <i className="fab fa-facebook-f text-light"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" rel="nofollow" target="_blank">
                            <i className="fab fa-twitter text-light"></i>
                        </a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Iniciar Sesión</button>
                </form>
            </div>
        </nav>
    )
}

export default Menu;