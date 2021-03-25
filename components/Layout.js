import Menu from './Menu'
import Noticias from './Noticias'
import Footer from './Footer'
import Head from 'next/head' 

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Alternativa 19 del Sur</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
            </Head>
            <Menu/>
            {children}
            <Noticias/>
            <Footer/>
            <script
                src="https://code.jquery.com/jquery-3.6.0.slim.js"
                integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY="
                crossorigin="anonymous">
            </script>
            <script 
                src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.6.0/umd/popper.min.js" 
                integrity="sha512-BmM0/BQlqh02wuK5Gz9yrbe7VyIVwOzD1o40yi1IsTjriX/NGF37NyXHfmFzIlMmoSIBXgqDiG1VNU6kB5dBbA==" 
                crossorigin="anonymous">
             </script>
             <script 
                src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" 
                integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" 
                crossorigin="anonymous">
              </script>
        </>
    )
}

export default Layout;