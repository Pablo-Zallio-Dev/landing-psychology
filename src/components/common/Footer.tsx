import iconHeart from "../../assets/icons/icon-footer-heart.svg";
import iconShield from "../../assets/icons/icon-footer-shield.svg";
import iconMedal from "../../assets/icons/icon-footer-medal.svg";
import iconLocation from "../../assets/icons/icon-contact-location.svg";
import iconPhone from "../../assets/icons/icon-contact-phone.svg";
import iconEmail from "../../assets/icons/icon-contact-email.svg";
import iconClock from "../../assets/icons/icon-footer-clock.svg";
import iconLink from "../../assets/icons/icon-footer-link.svg";

const Footer = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-5 py-12  text-gray-100 bg-slate-900">
        <section className=" max-w-7xl lg:p-20 p-4">
          <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            <section className="flex flex-col">
              <h1 className=" text-xl ">Cristabel Armstrong Áramburo</h1>
              <h2 className=" mt-1 mb-3 text-xs text-gray-300 ">
                Psicóloga Clínica Especializada
              </h2>
              <p className=" mb-5 text-xs text-gray-400 leading-4 ">
                Dedicada a brindar apoyo especializado en salud mental juvenil y
                tratamiento de adicciones con un enfoque integral y compasivo.
              </p>
              <section className=" flex gap-3 ">
                <img
                  src={iconHeart}
                  alt=""
                  className=" rounded-md bg-blue-600 p-1.5 "
                />
                <img
                  src={iconShield}
                  alt=""
                  className="rounded-md p-1.5 bg-green-600"
                />
                <img
                  src={iconMedal}
                  alt=""
                  className="rounded-md p-1.5 bg-purple-600"
                />
              </section>
            </section>

            <section className="">
              <h2 className=" text-md ">Enlaces rápidos</h2>
              <ul
                role="list"
                className=" flex flex-col gap-2 list-disc marker:text-blue-600 pl-4 py-3  "
              >
                <li className=" text-sm ">
                  <a
                    href="#home"
                    className=" text-xs text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Inicio
                  </a>
                </li>
                <li className=" text-sm ">
                  <a
                    href="#services"
                    className=" text-xs text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer "
                  >
                    Servicios
                  </a>
                </li>
                <li className=" text-sm ">
                  <a
                    href="#about"
                    className=" text-xs text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer "
                  >
                    Sobre Mí
                  </a>
                </li>
                <li className=" text-sm ">
                  <a
                    href="#review"
                    className=" text-xs text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer "
                  >
                    Testimonios
                  </a>
                </li>
                <li className=" text-sm ">
                  <a
                    href="#contact"
                    className=" text-xs text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer "
                  >
                    Contacto
                  </a>
                </li>
                <li className=" text-sm ">
                  <a
                    href="#quote"
                    className=" text-xs text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer "
                  >
                    Agendar Cita
                  </a>
                </li>
              </ul>
            </section>

            <section className="">
              <h2 className=" text-md ">Servicios</h2>
              <ul
                role="list"
                className=" flex flex-col gap-2 list-disc marker:text-green-600  pl-4 py-3  "
              >
                <li className=" text-sm ">
                  <p className=" text-xs text-gray-300">
                    Terapia para adicciones
                  </p>
                </li>
                <li className=" text-sm ">
                  <p className=" text-xs text-gray-300">Terapia Individual</p>
                </li>
                <li className=" text-sm ">
                  <p className=" text-xs text-gray-300">Terapia Familiar</p>
                </li>
                <li className=" text-sm ">
                  <p className=" text-xs text-gray-300">
                    Intervencion en Crisis
                  </p>
                </li>
                <li className=" text-sm ">
                  <p className=" text-xs text-gray-300">
                    Evaluación Psicológica
                  </p>
                </li>
                <li className=" text-sm ">
                  <p className=" text-xs text-gray-300">Talleres Grupales</p>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className=" text-md ">Informacion de Contacto</h2>
              <section className=" flex gap-2 items-start  ">
                <img src={iconLocation} alt="" />
                <section className="flex flex-col">
                  <p className=" text-gray-300 text-xs ">
                    Av. Principal 123, Torre Médica
                  </p>
                  <p className=" text-gray-300 text-xs ">
                    Piso 5, Consultorio 503
                  </p>
                  <p className=" text-gray-300 text-xs ">
                    Ciudad, Estado, CP 12345
                  </p>
                </section>
              </section>
              <section className=" flex gap-2 items-start  ">
                <img src={iconPhone} alt="" />
                <section className="flex flex-col gap-0.5">
                  <p className=" text-gray-300 text-xs ">+1 (555) 123-4567</p>
                  <p className=" text-gray-400 text-[.6rem] ">
                    Lun-Vie: 9AM-6PM
                  </p>
                </section>
              </section>

              <section className=" flex gap-2 items-start  ">
                <img src={iconEmail} alt="" />
                <section className="flex flex-col gap-0.5">
                  <p className=" text-gray-300 text-xs ">
                    cristabel.armstrong@email.com
                  </p>
                  <p className=" text-gray-400 text-[.6rem] ">
                    Respuesta en 24 horas
                  </p>
                </section>
              </section>

              <section className=" flex gap-2 items-start  ">
                <img src={iconClock} alt="" />
                <section className="flex flex-col">
                  <p className=" text-gray-300 text-xs ">Emergencias 24/7:</p>
                  <p className=" text-orange-300 text-xs ">+1 (555) 911-HELP</p>
                </section>
              </section>
            </section>
          </section>

          <hr className=" mt-10 p-4 text-gray-700 " />

          <section className=" flex flex-col items-center md:flex-row md:justify-between gap-5  text-gray-400">
            <p className=" text-center max-w-96 md:text-start text-xs  ">
              © 2026 Cristabel Armstrong Áramburo. Todos los derechos
              reservados. Licencia profesional #PSI-2023-456 | Colegio de
              Psicólogos Certificado
            </p>
            <section className=" flex justify-center gap-6 ">
              <a href="" className=" flex justify-center gap-1 text-xs  ">
                Política de Privacidad <img src={iconLink} alt="" />
              </a>
              <a href="" className=" flex justify-center gap-1 text-xs  ">
                Términos de servicios <img src={iconLink} alt="" />
              </a>
            </section>
          </section>

          <section className=" flex gap-3 p-6 bg-gray-800 rounded-md mt-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="#5085f7"
                d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21"
              />
            </svg>
            <section className=" leading-5 ">
              <p className=" text-xs text-gray-300 hover:text-white transition-colors duration-200 ">
                {" "}
                <b>Confidencialidad y Privacidad:</b> Toda la información
                compartida está protegida bajo el secreto profesional y las
                normativas de privacidad aplicables.
              </p>
              <p className=" text-[.65rem] text-gray-400 hover:text-white transition-colors duration-200 ">
                Este sitio web cumple con las regulaciones de protección de
                datos y confidencialidad médica vigentes.
              </p>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Footer;
