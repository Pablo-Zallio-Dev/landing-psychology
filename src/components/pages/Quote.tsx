import { useForm } from "react-hook-form";
import iconCalendar from "../../assets/icons/icon-calendar.svg";
import iconProfile from "../../assets/icons/icon-form-profile.svg";
import iconEmail from "../../assets/icons/icon-form-email.svg";
import iconPhone from "../../assets/icons/icon-form-phone.svg";
import iconNote from "../../assets/icons/icon-form-note.svg";
import iconCalendarForm from "../../assets/icons/icon-form-calendar.svg";
import iconWatch from "../../assets/icons/icon-form-watch.svg";
import { useState } from "react";
import { createPortal } from "react-dom";

const Quote = () => {
  const { register, handleSubmit, reset } = useForm();
  const [send, setSend] = useState(false);

  const onSubmit = (data: object) => {
    console.log(data);
    setSend(true);
    reset();
  };

  const closePortal = () => {
    setSend(false);
  };

  return (
    <>
      <section
        id="quote"
        className=" flex flex-col gap-10  my-20 px-3 items-center "
      >
        <p className=" text-3xl ">Agendar Cita</p>
        <p className=" max-w-xl text-center leading-6 text-slate-600 ">
          Programa tu consulta de manera sencilla. Selecciona el servicio que
          necesitas y el horario que mejor se adapte a ti.
        </p>
        <section className=" w-full md:max-w-[690px] lg:max-w-4xl shadow-md ">
          <section className=" flex items-center gap-2 p-3 bg-blue-50 ">
            <img src={iconCalendar} alt="" />
            <p className=" text-sm ">Formulario de cita</p>
          </section>
          <section className=" ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className=" grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-6 p-6 "
            >
              <div className=" w-full  flex flex-col gap-1 ">
                <label htmlFor="nombre" className=" font-bold text-xs  ">
                  <img src={iconProfile} alt="" className=" inline " /> Nombre
                  Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  {...register("nombre", {
                    required: "El nombre es obligatorio",
                    pattern: {
                      value: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/,
                      message:
                        "Solo se admiten letras (sin números ni símbolos)",
                    },
                    minLength: {
                      value: 2,
                      message: "El nombre es demasiado corto",
                    },
                  })}
                  className=" rounded-sm text-xs p-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className=" w-full  flex flex-col gap-1 ">
                <label htmlFor="email" className=" font-bold text-xs  ">
                  <img src={iconEmail} alt="" className=" inline " /> Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  {...register("email")}
                  className=" rounded-sm text-xs p-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100"
                  placeholder="Tu@email.com"
                />
              </div>

              <div className=" w-full  flex flex-col gap-1 ">
                <label htmlFor="phone" className=" font-bold text-xs  ">
                  <img src={iconPhone} alt="" className=" inline " /> Telefono
                </label>
                <input
                  type="number"
                  id="phone"
                  {...register("telefono")}
                  className=" rounded-sm text-xs p-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100"
                  placeholder="+34 12 345 67 89"
                />
              </div>

              <div className=" w-full  flex flex-col gap-1 ">
                <label htmlFor="servicio" className=" font-bold text-xs  ">
                  <img src={iconNote} alt="" className=" inline " /> Tipo de
                  servicio *
                </label>
                <select
                  required
                  id="servicio"
                  {...register("servicio")}
                  className=" border-none rounded-sm text-xs p-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100"
                >
                  <option
                    value=""
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >
                    Selecciona un servicio
                  </option>
                  <option
                    value="jovenes"
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >
                    Terapia para adicciones en Jóvenes
                  </option>
                  <option
                    value="individual"
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >
                    Terapia Individual
                  </option>
                  <option
                    value="familiar"
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >
                    Terapia Familiar
                  </option>
                  <option
                    value="crisis"
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >
                    Intervención de crisis
                  </option>
                  <option
                    value="evaluacion"
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >
                    Evaluación Psicológica
                  </option>
                  <option
                    value="talleres grupales"
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >
                    Talleres Grupales
                  </option>
                  <option
                    value="inicial"
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >
                    Consulta Inicial
                  </option>
                </select>
              </div>

              <div className=" w-full  flex flex-col gap-1 ">
                <label htmlFor="date" className=" font-bold text-xs  ">
                  <img src={iconCalendarForm} alt="" className=" inline " />{" "}
                  Fecha Preferida *
                </label>
                <input
                  {...register("fecha")}
                  required
                  id="date"
                  type="date"
                  className=" rounded-sm text-xs p-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100"
                  placeholder="Selecciona una hora"
                />
              </div>

              <div className=" w-full  flex flex-col gap-1 ">
                <label htmlFor="time" className=" font-bold text-xs   ">
                  <img src={iconWatch} alt="" className=" inline " /> Hora
                  preferida *
                </label>
                <input
                  {...register("hora")}
                  required
                  id="time"
                  type="time"
                  className=" rounded-sm text-xs p-1 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100"
                />
              </div>

              <div className=" w-full sm:col-span-2  flex flex-col gap-1 ">
                <label htmlFor="notas" className=" font-bold text-xs ">
                  <img src={iconNote} alt="" className=" inline " /> Notas
                  adicionales
                </label>
                <textarea
                  {...register("notas")}
                  id="notas"
                  className=" p-1.5 text-xs resize-none h-16 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 rounded-sm w-full  bg-gray-100"
                  placeholder="Describe brevemente el motivo de la consulta o cualquier información relevente..."
                />
              </div>

              <div className=" w-full sm:col-span-2 p-3 bg-blue-100 rounded-md ">
                <p className="   text-sm ">
                  <b className="text-gray-700">Nota importante:</b> Una vez
                  enviada tu solicitud, te contactaremos en un plazo de 24 horas
                  para confirmar la disponibilidad y finalizar el agendamiento.
                  <br /> <br /> Para emergencias, por favor contacta
                  directamente al teléfono de emergencias.
                </p>
              </div>

              <div className=" w-full sm:col-span-2 p-1.5 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white text-xs text-center font-bold rounded-md ">
                <input
                  type="submit"
                  value="Solicitar cita"
                  className="w-full "
                />
                {send &&
                  createPortal(
                    <>
                      <section className=" fixed top-0 left-0 flex justify-center items-center w-full h-full bg-blue-600/20  ">
                        <section className=" flex flex-col items-center  bg-white p-6 rounded-md ">
                          <p className=" text-lg font-medium ">
                            Su cita se proceso correctamente
                          </p>
                          <p className="  font-medium ">¡Muchas gracias!</p>
                          <button
                            className=" mt-5 bg-blue-400 py-1 px-4 rounded-md text-gray-100 "
                            onClick={closePortal}
                          >
                            Volver
                          </button>
                        </section>
                      </section>
                    </>,
                    document.body
                  )}
              </div>
            </form>
          </section>
        </section>
      </section>
      {}
    </>
  );
};

export default Quote;
