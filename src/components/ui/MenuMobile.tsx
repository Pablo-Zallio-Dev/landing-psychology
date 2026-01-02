import { useMenuMobile } from '../../store/menuStore';

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
          <a href='#quote' className="primary w-full max-w-xl self-center py-2 px-4 bg-blue-600 text-white text-center  " onClick={changeState}>Agendar cita</a>
        </nav>
      </section>
  )
}

export default MenuMobile