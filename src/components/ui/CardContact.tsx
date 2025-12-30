import iconLocation from "../../assets/icons/icon-contact-location.svg";
import iconPhone from "../../assets/icons/icon-contact-phone.svg";
import iconEmail from "../../assets/icons/icon-contact-email.svg";
import iconAlert from "../../assets/icons/icon-contact-alert.svg";
import iconClock from "../../assets/icons/icon-contact-clock.svg";

const CardContact = () => {
  return (
    <>
    
     <section className=" w-full ">
                                    {/* Seccion tarjetas */}
                                    <section className="  flex flex-col gap-4 px-3 ">

                                          {/* Tarjeta 1 */}
                                          <section className=" flex items-start gap-3 w-full p-5 shadow-md bg-white rounded-md ">
                                                <img
                                                      src={iconLocation}
                                                      alt=""
                                                      className=" p-2 rounded-lg bg-gray-50  "
                                                />
                                                <section className=" flex flex-col gap-2 ">
                                                      <p className="">Ubicación</p>
                                                      <section className=" leading-5 text-xs text-slate-700 ">
                                                            <p className="">Av. Principal 123, Torre Médica</p>
                                                            <p className="">Piso 5, Consultorio 503</p>
                                                            <p className="">Ciudad, Estado, CP 12345</p>
                                                      </section>
                                                      <a href=" " className="text-sm text-blue-600">
                                                            Ver en el mapa
                                                      </a>{" "}
                                                      {/* Enlazar google maps */}
                                                </section>
                                          </section>

                                          {/* Tarjeta 2 */}
                                          <section className=" flex items-start gap-3 w-full p-5 shadow-md bg-white rounded-md ">
                                                <img
                                                      src={iconPhone}
                                                      alt=""
                                                      className=" p-2 rounded-lg bg-gray-50  "
                                                />
                                                <section className=" flex flex-col gap-2 ">
                                                      <p className="">Teléfono</p>
                                                      <section className=" leading-5 text-xs text-slate-700 ">
                                                            <p className="">+1 (555) 123-4567</p>
                                                            <p className="">Lun - Vie: 9:00 AM - 6:00 PM</p>
                                                            <p className="">Sábados: 9:00 AM - 2:00 PM</p>
                                                      </section>
                                                      <a href=" " className="text-sm text-blue-600">
                                                            Llamar ahora
                                                      </a>{" "}
                                                      {/* Enlazar telefono */}
                                                </section>
                                          </section>

                                          {/* Tarjeta 3 */}
                                          <section className=" flex items-start gap-3 w-full p-5 shadow-md bg-white rounded-md ">
                                                <img
                                                      src={iconEmail}
                                                      alt=""
                                                      className=" p-2 rounded-lg bg-gray-50  "
                                                />
                                                <section className=" flex flex-col gap-2 ">
                                                      <p className="">Email</p>
                                                      <section className=" leading-5 text-xs text-slate-700 ">
                                                            <p className="">cristabel.armstrong@email.com</p>
                                                            <p className="">Respuesta en 24 horas</p>
                                                            <p className="">Consultas generales</p>
                                                      </section>
                                                      <a href=" " className="text-sm text-blue-600">
                                                            Enviar email
                                                      </a>{" "}
                                                      {/* Enlazar mail */}
                                                </section>
                                          </section>

                                          {/* Tarjeta 4 */}
                                          <section className=" flex items-start gap-3 w-full p-5 shadow-md bg-white rounded-md ">
                                                <img
                                                      src={iconAlert}
                                                      alt=""
                                                      className=" p-2 rounded-lg bg-gray-50  "
                                                />
                                                <section className=" flex flex-col gap-2 ">
                                                      <p className="">Emergencias</p>
                                                      <section className=" leading-5 text-xs text-slate-700 ">
                                                            <p className="">+1 (555) 911-HELP</p>
                                                            <p className="">Atención 24/7</p>
                                                            <p className="">Crisis inmediatas</p>
                                                      </section>
                                                      <a href=" " className="text-sm text-blue-600">
                                                            Llamar ahora
                                                      </a>{" "}
                                                      {/* Enlazar telefono */}
                                                </section>
                                          </section>

                                          {/* Tarjeta 5 */}
                                          <section className=" flex items-start gap-3 w-full p-5 shadow-md bg-blue-100 border border-blue-200 rounded-md ">
                                                <img
                                                      src={iconClock}
                                                      alt=""
                                                      className=" rounded-lbg-gray-50  "
                                                />
                                                <section className=" flex flex-col gap-2 ">
                                                      <p className="">Horarios de Atención</p>
                                                      <section className=" leading-6 text-xs text-slate-700 ">
                                                            <p className="">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                                                            <p className="">Sábados: 9:00 AM - 2:00 PM</p>
                                                            <p className="">Domingos: Solo emergencias</p>
                                                      </section>
                                                </section>
                                          </section>

                                    </section>

                              </section>

    </>
  )
}

export default CardContact
{/* arreglar valores del form */}