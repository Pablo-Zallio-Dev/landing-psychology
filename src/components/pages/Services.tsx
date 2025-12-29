import iconPoint from "../../assets/icons/icon-point.svg";
import iconBrain from "../../assets/icons/icon-card-brain.svg";
import iconHeart from "../../assets/icons/icon-card-heart.svg";
import iconFamily from "../../assets/icons/icon-card-family.svg";
import iconShield from "../../assets/icons/icon-card-shield.svg";
import iconLight from "../../assets/icons/icon-card-light.svg";
import iconLucide from "../../assets/icons/icon-card-lucide.svg";
import iconServiceHandLove from '../../assets/icons/icon-service-handLove.svg'
import Button from "../ui/Button";

const Services = () => {
  return (
    <div
      id="services"
      className=" flex flex-col items-center gap-18 py-18 px-4 w-full "
    >
      <section className="flex flex-col  gap-4 text-center ">
        <h1 className="text-3xl lg:text-4xl text-slate-900 ">
          Servicios Especializados
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Ofrezco una gama completa de servicios diseñados específicamente para
          abordar las necesidades únicas de cada paciente, con especial enfoque
          en jóvenes y problemas de salud mental.
        </p>
      </section>
      <section className=" flex flex-wrap justify-center gap-8 xl:gap-10 max-w-[1500px] ">
        <section className=" p-6 rounded-xl max-w-[450px] md:max-w-[360px] 2xl:max-w-[390px] border bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow duration-300">
          <article className="flex justify-between items-center pb-6">
            <img
              className="bg-white p-2.5 rounded-lg shadow-sm"
              src={iconBrain}
              alt=""
            />
            <p className=" py-0.5 px-2 rounded-lg text-xs font-medium bg-white ">
              50 Min.
            </p>
          </article>
          <article className=" flex flex-col gap-8 leading-none text-slate-900">
            <p className="">Terapia para Adicciones en Jóvenes</p>
            <p className="text-slate-700 text-base/6">
              Tratamiento especializado para adicciones a sustancias, tecnología
              y comportamientos compulsivos en adolescentes y jóvenes adultos.
            </p>
            <ol className=" space-y-2 ">
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Evaluación integral</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">
                  Terapia cognitivo-conductual
                </p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Prevencion de recaidas</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Apoyo familiar</p>
              </li>
            </ol>
          </article>
        </section>
        <section className=" p-6 rounded-xl max-w-[450px] md:max-w-[360px] 2xl:max-w-[390px] border bg-red-50 border-red-200 hover:shadow-lg transition-shadow duration-300">
          <article className="flex justify-between items-center pb-6">
            <img
              className="bg-white p-2.5 rounded-lg shadow-sm"
              src={iconHeart}
              alt=""
            />
            <p className=" py-0.5 px-2 rounded-lg text-xs font-medium bg-white ">
              50 Min.
            </p>
          </article>
          <article className=" flex flex-col gap-8 leading-none text-slate-900">
            <p className="">Terapia Individual</p>
            <p className="text-slate-700 text-base/6">
              Sesiones personalizadas para abordar ansiedad, depresión, trauma y
              otros desafíos de salud mental en un ambiente confidencial.
            </p>
            <ol className=" space-y-2 ">
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Enfoque personalizado</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">
                  Técnicas basadas en evidencia
                </p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">
                  Espacio seguro y confidencial
                </p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Seguimiento continuo</p>
              </li>
            </ol>
          </article>
        </section>
        <section className=" p-6 rounded-xl max-w-[450px] md:max-w-[360px] 2xl:max-w-[390px] border bg-green-50 border-green-200 hover:shadow-lg transition-shadow duration-300">
          <article className="flex justify-between items-center pb-6">
            <img
              className="bg-white p-2.5 rounded-lg shadow-sm"
              src={iconFamily}
              alt=""
            />
            <p className=" py-0.5 px-2 rounded-lg text-xs font-medium bg-white ">
              75 Min.
            </p>
          </article>
          <article className=" flex flex-col gap-8 leading-none text-slate-900">
            <p className="">Terapia Familiar</p>
            <p className="text-slate-700 text-base/6">
              Fortalecimiento de vínculos familiares y mejora de la comunicación
              para superar crisis y conflictos.
            </p>
            <ol className=" space-y-2 ">
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Mediación familiar</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Mejora de comunicación</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">
                  Resolución de conflictos
                </p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">
                  Fortalecimiento de vínculos
                </p>
              </li>
            </ol>
          </article>
        </section>
        <section className=" p-6 rounded-xl max-w-[450px] md:max-w-[360px] 2xl:max-w-[390px] border bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow duration-300">
          <article className="flex justify-between items-center pb-6">
            <img
              className="bg-white p-2.5 rounded-lg shadow-sm"
              src={iconShield}
              alt=""
            />
            <p className=" py-0.5 px-2 rounded-lg text-xs font-medium bg-white ">
              Variable.
            </p>
          </article>
          <article className=" flex flex-col gap-8 leading-none text-slate-900">
            <p className="">Intervención en Crisis</p>
            <p className="text-slate-700 text-base/6">
              Apoyo inmediato para situaciones de crisis emocional o mental que
              requieren atención urgente.
            </p>
            <ol className=" space-y-2 ">
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Atención prioritaria</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">
                  Estabilización emocional
                </p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Plan de seguridad</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Seguimiento intensivo</p>
              </li>
            </ol>
          </article>
        </section>
        <section className=" p-6 rounded-xl max-w-[450px] md:max-w-[360px] 2xl:max-w-[390px] border bg-orange-50 border-orange-200 hover:shadow-lg transition-shadow duration-300">
          <article className="flex justify-between items-center pb-6">
            <img
              className="bg-white p-2.5 rounded-lg shadow-sm"
              src={iconLucide}
              alt=""
            />
            <p className=" py-0.5 px-2 rounded-lg text-xs font-medium bg-white ">
              90 Min.
            </p>
          </article>
          <article className=" flex flex-col gap-8 leading-none text-slate-900">
            <p className="">Evaluación Psicológica</p>
            <p className="text-slate-700 text-base/6">
              Evaluaciones comprehensivas para diagnóstico y planificación de
              tratamiento personalizado.
            </p>
            <ol className=" space-y-2 ">
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Evaluación diagnóstica</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Pruebas psicológicas</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Informe detallado</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">
                  Recomendaciones específicas
                </p>
              </li>
            </ol>
          </article>
        </section>
        <section className=" p-6 rounded-xl max-w-[450px] md:max-w-[360px] 2xl:max-w-[390px] border bg-teal-50 border-teal-200 hover:shadow-lg transition-shadow duration-300">
          <article className="flex justify-between items-center pb-6">
            <img
              className="bg-white p-2.5 rounded-lg shadow-sm"
              src={iconLight}
              alt=""
            />
            <p className=" py-0.5 px-2 rounded-lg text-xs font-medium bg-white ">
              90 min
            </p>
          </article>
          <article className=" flex flex-col gap-8 leading-none text-slate-900">
            <p className="">Talleres Grupales</p>
            <p className="text-slate-700 text-base/6">
              Sesiones grupales enfocadas en habilidades de vida, manejo de emociones y apoyo entre pares.
            </p>
            <ol className=" space-y-2 ">
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Aprendizaje colaborativo</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">
                  Habilidades sociales
                </p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Apoyo entre pares</p>
              </li>
              <li className="flex gap-2">
                <img src={iconPoint} alt="" />
                <p className="text-sm text-slate-600">Técnicas de afrontamiento</p>
              </li>
            </ol>
          </article>
        </section>
      </section>
      <section className=" flex flex-col justify-center items-center gap-6 bg-slate-50 rounded-2xl p-8 max-w-4xl text-center">
        <img className=" p-3 bg-blue-100 rounded-full " src={iconServiceHandLove} alt="" />
        <p className=" text-2xl ">¿No estás seguro qué servicio necesitas?</p>
        <p className=" text-slate-600 ">Agenda una consulta inicial donde evaluaremos juntos tus necesidades y diseñaremos el plan de tratamiento más adecuado para ti.</p>
        <Button type="button" className="btn btn-primary primary py-3 px-4 text-white bg-blue-600 bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
          <a href=""> Solicitar Consulta Inicial </a>
        </Button>
      </section>
    </div>
  );
};

export default Services;

/* 

Talleres Grupales
Sesiones grupales enfocadas en habilidades de vida, manejo de emociones y apoyo entre pares.

Aprendizaje colaborativo
Habilidades sociales
Apoyo entre pares
Técnicas de afrontamiento



*/
