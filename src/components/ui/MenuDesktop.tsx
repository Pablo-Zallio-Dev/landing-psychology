import Button from './Button'

function MenuDesktop() {
  return (
         <nav className=" hidden border-y-gray-400 text-gray-700 lg:flex lg:items-center lg:gap-8 ">
          <a href="#header" className=" hover:text-blue-600 transition-colors duration-200 ">
            Inicio
          </a>
          <a href="#services" className=" hover:text-blue-600 transition-colors duration-200  ">
            Servicios
          </a>
          <a href="#about" className=" hover:text-blue-600 transition-colors duration-200  ">
            Sobre Mí
          </a>
          <a href="#contact" className=" hover:text-blue-600 transition-colors duration-200  ">
            Contacto
          </a>
          <Button className="primary py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">Agendar cita</Button>
        </nav>
  )
}

export default MenuDesktop