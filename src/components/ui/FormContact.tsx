import { useForm } from "react-hook-form";

import iconDialogue from "../../assets/icons/icon-form-dialogue.svg";
import iconProfile from "../../assets/icons/icon-form-profile.svg";
import iconEmail from "../../assets/icons/icon-form-email.svg";
import iconPhone from "../../assets/icons/icon-form-phone.svg";
import iconCalendarForm from "../../assets/icons/icon-form-calendar.svg";
import { useState } from "react";
import { createPortal } from "react-dom";

const FormContact = () => {
      const { register, handleSubmit, reset } = useForm();
      const [send, setSend] = useState(false)


      const onSubmit = (data: object) => {
            console.log(data)

            setSend(true)

            reset()

      }

      const closePortal = () => {
            setSend(false)

      }
      return (
            <>
                  {/* contenedor formulario */}
                  <section className=" w-full lg:h-[810px] ">
                        <section className=" mx-3 p-5 lg:h-full bg-white shadow-md rounded-md ">
                              {/* titulo del formulario */}
                              <section className=" flex items-center gap-2 ">
                                    <img src={iconDialogue} alt="" />
                                    <p className=" text-sm ">Enviar consulta</p>
                              </section>

                              {/* Formulario */}
                              <form onSubmit={handleSubmit(onSubmit)} action="" className=" flex flex-col gap-5 py-10">
                                    <section className=" grid sm:grid-cols-2 gap-5 ">
                                          {/* Nombre */}
                                          <section className="">
                                                <label htmlFor="nombre" className="flex items-center gap-3">
                                                      <img src={iconProfile} alt="" className="  " />
                                                      <p className=" text-xs font-medium ">Nombre*</p>
                                                </label>
                                                <input
                                                      required
                                                      {...register('nombre', {      
                                                            required: "El nombre es obligatorio",
                                                            pattern: {
                                                                  value: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/,
                                                                  message: "Solo se admiten letras (sin números ni símbolos)"
                                                            },
                                                            minLength: {
                                                                  value: 2,
                                                                  message: "El nombre es demasiado corto"
                                                            }
                                                      })}
                                                      id="nombre"
                                                      type="text"
                                                      className=" w-full p-1.5 mt-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100 border-0 rounded-md text-xs "
                                                      placeholder="Tu nombre completo"
                                                />
                                          </section>

                                          {/* email */}
                                          <section className="">
                                                <label htmlFor="email" className="flex items-center gap-3">
                                                      <img src={iconEmail} alt="" className="  " />
                                                      <p className=" text-xs font-medium ">Email*</p>
                                                </label>
                                                <input
                                                      required
                                                      {...register('email')}
                                                      type="text"
                                                      id="email"
                                                      className=" w-full p-1.5 mt-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100 border-0 rounded-md text-xs "
                                                      placeholder="Tu nombre completo"
                                                />
                                          </section>

                                          {/* Telefono */}
                                          <section className="">
                                                <label htmlFor="phone" className="flex items-center gap-3">
                                                      <img src={iconPhone} alt="" className="  " />
                                                      <p className=" text-xs font-medium ">Telefono</p>
                                                </label>
                                                <input
                                                      type="text"
                                                      id="phone"
                                                      className=" w-full p-1.5 mt-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100 border-0 rounded-md text-xs "
                                                      placeholder="Tu nombre completo"
                                                />
                                          </section>

                                          {/* Horario */}
                                          <section className="">
                                                <label htmlFor="time" className="flex items-center gap-3">
                                                      <img src={iconCalendarForm} alt="" className="  " />
                                                      <p className=" text-xs font-medium ">Horario Preferido</p>
                                                </label>
                                                <select id="time" className=" w-full p-1.5 mt-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100 border-0 rounded-md text-xs ">
                                                      <option
                                                            value=""
                                                            className=" text-xs bg-white hover:bg-gray-100 p-4 "
                                                      >
                                                            Seleccione el horario
                                                      </option>
                                                      <option
                                                            value=""
                                                            className=" text-xs bg-white hover:bg-gray-100 p-4 "
                                                      >
                                                            Mañana (9:00 AM - 12:00 PM)
                                                      </option>
                                                      <option
                                                            value=""
                                                            className=" text-xs bg-white hover:bg-gray-100 p-4 "
                                                      >
                                                            Tarde (12:00 AM - 4:00 PM)
                                                      </option>
                                                      <option
                                                            value=""
                                                            className=" text-xs bg-white hover:bg-gray-100 p-4 "
                                                      >
                                                            Noche (4:00 AM - 8:00 PM)
                                                      </option>
                                                      <option
                                                            value=""
                                                            className=" text-xs bg-white hover:bg-gray-100 p-4 "
                                                      >
                                                            Fines de semana
                                                      </option>
                                                      <option
                                                            value=""
                                                            className=" text-xs bg-white hover:bg-gray-100 p-4 "
                                                      >
                                                            Flexibles
                                                      </option>
                                                </select>
                                          </section>
                                    </section>

                                    {/* Consulta */}
                                    <section className="">
                                          <label htmlFor="consulta" className="flex items-center gap-3">
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="20"
                                                      height="20"
                                                      viewBox="0 0 21 21"
                                                >
                                                      <path
                                                            fill="none"
                                                            stroke="#000"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M11 16.517c4.418 0 8-3.284 8-7.017S15.418 3 11 3S3 6.026 3 9.759c0 1.457.546 2.807 1.475 3.91L3.5 18.25l3.916-2.447a9.2 9.2 0 0 0 3.584.714"
                                                      />
                                                </svg>
                                                <p className=" text-xs font-medium ">Tipo de consulta</p>
                                          </label>
                                          <select id="consulta" className=" w-full p-1.5 mt-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100 border-0 rounded-md text-xs ">
                                                <option
                                                      value=""
                                                      className=" text-xs bg-white hover:bg-gray-100 p-4 "
                                                >
                                                      Seleccione la consulta
                                                </option>
                                                <option
                                                      value=""
                                                      className=" text-xs bg-white hover:bg-gray-100 p-4 "
                                                >
                                                      Consulta Inicial
                                                </option>
                                                <option
                                                      value=""
                                                      className=" text-xs bg-white hover:bg-gray-100 p-4 "
                                                >
                                                      Seguimiento
                                                </option>
                                                <option
                                                      value=""
                                                      className=" text-xs bg-white hover:bg-gray-100 p-4 "
                                                >
                                                      Terapia Familiar
                                                </option>
                                                <option
                                                      value=""
                                                      className=" text-xs bg-white hover:bg-gray-100 p-4 "
                                                >
                                                      Evaluación
                                                </option>
                                                <option
                                                      value=""
                                                      className=" text-xs bg-white hover:bg-gray-100 p-4 "
                                                >
                                                      Urgente
                                                </option>
                                                <option
                                                      value=""
                                                      className=" text-xs bg-white hover:bg-gray-100 p-4 "
                                                >
                                                      Solo Informacion
                                                </option>
                                          </select>
                                    </section>

                                    {/* Notas */}

                                    <div className=" w-full sm:col-span-2  flex flex-col gap-1 ">
                                          <label htmlFor="formNotas" className=" font-medium text-xs  ">Mensaje*</label>
                                          <textarea
                                                required
                                                {...register("formNotas")}

                                                id="formNotas"
                                                className=" p-1.5 text-xs resize-none h-16 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 rounded-sm w-full  bg-gray-100"
                                                placeholder="Describe consulta o situacion"
                                          />
                                    </div>
                                    <section className=" p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                                          <p className=" text-xs text-yellow-900 ">
                                                <b>Confidencialidad:</b> Toda la información compartida es estrictamente confidencial y protegida bajo el secreto profesional.
                                          </p>
                                    </section>

                                    <div className=" w-full sm:col-span-2 p-1.5 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white text-xs text-center font-bold rounded-md ">
                                          <input type="submit" value="Enviar consulta" className="w-full" />
                                    </div>
                              </form>
                        </section>
                  </section>
                  {
                        send && createPortal(
                              <>
                                    <section className=" fixed top-0 left-0 flex justify-center items-center w-full h-full bg-blue-600/20  ">
                                          <section className=" flex flex-col items-center  bg-white p-6 rounded-md ">
                                                <p className=" text-lg font-medium ">Su mensaje se envio correctamente</p>
                                                <p className="  font-medium ">¡Muchas gracias!</p>
                                                <button className=" mt-5 bg-blue-400 py-1 px-4 rounded-md text-gray-100 " onClick={closePortal}>Volver</button>
                                          </section>
                                    </section>
                              </>,
                              document.body
                        )
                  }
            </>
      );
};

export default FormContact;
{
      /* arreglarvalues del form */
}
