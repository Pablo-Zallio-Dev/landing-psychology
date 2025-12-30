import { useForm } from "react-hook-form";
import iconCalendar from "../../assets/icons/icon-calendar.svg";
import iconProfile from "../../assets/icons/icon-form-profile.svg";
import iconEmail from "../../assets/icons/icon-form-email.svg";
import iconPhone from "../../assets/icons/icon-form-phone.svg";
import iconNote from "../../assets/icons/icon-form-note.svg";
import iconCalendarForm from "../../assets/icons/icon-form-calendar.svg";
import iconWatch from "../../assets/icons/icon-form-watch.svg";

const Quote = () => {
  const { register, handleSubmit } = useForm();


  const onSubmit = (data:object) => {
    console.log(data)
  }
  return (
    <>
      <section className=" flex flex-col gap-10  my-20 px-3 items-center ">
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
                <label className=" font-bold text-xs  ">
                  <img src={iconProfile} alt="" className=" inline " /> Nombre
                  Completo *
                </label>
                <input
                  type="text"
                  required
                  {...register('nombre')}
                  className=" rounded-sm text-xs p-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100"
                  placeholder="Tu nombre completo"
                />
            
              </div>

              <div className=" w-full  flex flex-col gap-1 ">
                <label className=" font-bold text-xs  ">
                  <img src={iconEmail} alt="" className=" inline " /> Email *
                </label>
                <input
                  type="email"
                  required
                  {...register('email')}
                  className=" rounded-sm text-xs p-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100"
                  placeholder="Tu@email.com"
                />
              </div>

              <div className=" w-full  flex flex-col gap-1 ">
                <label className=" font-bold text-xs  ">
                  <img src={iconPhone} alt="" className=" inline " /> Telefono
                </label>
                <input
                  type="number"
                  {...register('telefono')}
                  className=" rounded-sm text-xs p-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100"
                  placeholder="+34 12 345 67 89"
                />
              </div>

              <div className=" w-full  flex flex-col gap-1 ">
                <label className=" font-bold text-xs  ">
                  <img src={iconNote} alt="" className=" inline " /> Tipo de
                  servicio *
                </label>
                <select
                  required
                  id=""
                  
                  {...register('servicio')}
                  className=" border-none rounded-sm text-xs p-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100"
                  
                >
                  <option
                    value=""
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >Selecciona un servicio</option>
                  <option
                    value="jovenes"
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >
                    Terapia para adicciones en Jóvenes
                  </option>
                  <option
                    value=""
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >
                    Terapia Individual
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
                    Intervención de crisis
                  </option>
                  <option
                    value=""
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >
                    Evaluación Psicológica
                  </option>
                  <option
                    value=""
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >
                    Talleres Grupales
                  </option>
                  <option
                    value=""
                    className=" text-xs bg-white hover:bg-gray-100 p-4 "
                  >
                    Consulta Inicial
                  </option>
                </select>
              </div>

              <div className=" w-full  flex flex-col gap-1 ">
                <label className=" font-bold text-xs  ">
                  <img src={iconCalendarForm} alt="" className=" inline " />{" "}
                  Fecha Preferida *
                </label>
                <input
                {...register('fecha')}
                required
                  type="date"
                  className=" rounded-sm text-xs p-1.5 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100"
                  placeholder="Selecciona una hora"
                />
              </div>

              <div className=" w-full  flex flex-col gap-1 ">
                <label className=" font-bold text-xs   ">
                  <img src={iconWatch} alt="" className=" inline " /> Hora
                  preferida
                </label>
                <input
                {...register('hora')}
                required
                  type="time"
                  className=" rounded-sm text-xs p-1 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 bg-gray-100"
                />
              </div>

              <div className=" w-full sm:col-span-2  flex flex-col gap-1 ">
                <label className=" font-bold text-xs " >
                  <img src={iconNote} alt="" className=" inline " /> Notas adicionales
                </label>
                <textarea
                {...register('notas')}
                  id="notas"
                  className=" p-1.5 text-xs resize-none h-16 focus:border focus:border-gray-500 focus:outline-4 focus:outline-gray-300 rounded-sm w-full  bg-gray-100"
                  placeholder="Describe brevemente el motivo de la consulta o cualquier información relevente..."
                />
              </div>

              <div className=" w-full sm:col-span-2 p-3 bg-blue-100 rounded-md ">
                <p className="   text-sm ">
                 <b className="text-gray-700">Nota importante:</b>  Una vez enviada tu solicitud, te
                  contactaremos en un plazo de 24 horas para confirmar la
                  disponibilidad y finalizar el agendamiento.<br /> <br /> Para emergencias,
                  por favor contacta directamente al teléfono de emergencias.
                </p>
              </div>

              <div className=" w-full sm:col-span-2 p-1.5 bg-blue-600 text-white text-xs text-center font-bold rounded-md ">
                <input type="submit" value="Solicitar cita" className="w-full" />
              </div>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};

export default Quote;
