import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import Productos from '../components/Productos'

const users = [
    {
      id: "1",
      title: "GRUPAL",
      image: "images/grupal.jpg",
      description: "Dirigido a toda persona con alguna actividad productiva, comercial o de servicio, otorgándoles créditos de fácil acceso mediante grupos",    
    },
    {
      id: "2",
      title: "INDIVIDUAL",
      image: "images/individual.jpg",
      description: "Dirigido a personas físicas o morales con actividades productivas, comerciales y/o de servicios, preferentemente en el medio rural; con la finalidad de ofrecerle servicios financieros, favoreciendo su desarrollo microempresarial y sus necesidades operativas ",    
    },
    {
      id: "3",
      title: "CONSTRUCREDI",
      image: "images/construcredi.jpg",
      description: "Dirigido a personas físicas con la necesidad de ampliar o mejorar su vivienda para obtener mejor calidad de vida",    
    },
    {
      id: "4",
      title: "MEJORANDO TU VIVIENDA",
      image: "images/mejorando.jpg",
      description: "Dirigido a toda persona con alguna actividad productiva, otorgándoles créditos de fácil acceso para promover la inversion fija y apoyar el capital de trabajo de actividades primarias",    
    },
    
  ];

const Index = () => {
    return (
        <Layout>
            <Carousel/>
            <Productos users={users}/>
        </Layout>  
    ) 
}

export default Index;