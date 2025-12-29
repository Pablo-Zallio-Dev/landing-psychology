import { useMenuMobile } from '../../store/menuStore';
import Button from './Button'

const MenuMobile = () => {

    const changeState = useMenuMobile((state) => state.changeState);
  

  return (
    <section className={`absolute w-full lg:hidden`} >
        <nav className=" flex flex-col bg-white gap-8 text-gray-600 p-3.5 ">
          <a href="#header" className="  " onClick={changeState}>
            Inicio
          </a>
          <a href="#services" className="  " onClick={changeState}>
            Servicios
          </a>
          <a href="#about" className="  " onClick={changeState}>
            Sobre Mí
          </a>
          <a href="#contact" className="  " onClick={changeState}>
            Contacto
          </a>
          <Button className="primary w-full max-w-xl self-center py-2 px-4 bg-blue-500 text-white " onClick={changeState}>Agendar cita</Button>
        </nav>
      </section>
  )
}

export default MenuMobile