import Link from 'next/link'
import Escribenos from './Escribenos'

const Footer = () => {
    return (
        <footer style={{backgroundColor: "rgba(0, 31, 63, 1)"}}>
            <div className='container py-5'>
                <div className="row">
                    <div className="col-sm-6 text-center">
                        <Link href="/">
                            <a>
                                <img src="/images/alter_icon.png" width="250" height="200" className="img-fluid d-inline-block"/>
                            </a>
                        </Link>
                        <p className="text-white mt-5">Síguenos en nuestras redes sociales</p>
                        <button type="button" className="btn btn-light mx-1">
                            <i className="fab fa-facebook-f align-middle"></i>
                        </button>
                        <button type="button" className="btn btn-light mx-1">
                            <i className="fab fa-twitter align-middle"></i>
                        </button>
                        <button type="button" className="btn btn-light mx-1">
                            <i className="fab fa-youtube"></i>
                        </button>
                    </div>
                    <div className="col-sm-6">
                        <Escribenos/>
                    </div>
                </div>
            </div>
            <div className="container py-4 border-top">
                <div className="row">
                    <p className="text-white font-weight-lighter text-justify">
                        Alternativa 19 del Sur, S.A. de C.V., SOFOM, E.N.R. para su constitución y operación no requiere de autorización de la SHCP, y está sujeta a la supervisión de la CNBS únicamente para efectos de lo dispuesto por el articulo 56 de la Ley General de Organizaciones y Actividades Auxiliares de Crédito. Incumplir tus obligaciones te puede generar comisiones e intereses moratorios. Contratar créditos por arriba de tu capacidad de pago puede afectar tu historialFinanciero. Consulta términos, comisiones, condiciones, reestricciones y requisitos en wwww.alternativa19delsur.com. UNE: 11 Norte Poniente No. 1147 Altos Col. Vista Hermosa, Tuxtla Gutiérrez, Chiapas. atencion@alternativa19delsur.com o a los Teléfonos: (961) 147 01 50 o al 800 472 6829 Lada sin Costo. CONDUSEF: www.condusef.gob.mx / 800 999 8080. 
                    </p>
                </div>
            </div> 
        </footer>
    )
}
export default Footer;