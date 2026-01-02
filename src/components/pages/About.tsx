import iconFamily from "../../assets/icons/icon-about-family.svg";
import iconWatch from "../../assets/icons/icon-about-watch.svg";
import iconHeart from "../../assets/icons/icon-about-heart.svg";
import iconMedal from "../../assets/icons/icon-about-medal.svg";
import iconCertGraduation from "../../assets/icons/icon-cert-graduation.svg";
import iconCertMedal from "../../assets/icons/icon-cert-medal.svg";
import iconCertBook from "../../assets/icons/icon-cert-book.svg";
import iconCertFamily from "../../assets/icons/icon-cert-family.svg";
import imageAbout from "../../assets/images/image-about.webp";

const About = () => {
  return (
    <div id="about" className=" flex justify-center w-full bg-gray-50  ">
      <section className=" flex flex-col justify-center items-center gap-12 md:flex-row max-w-7xl py-20 px-3  ">
        <article className=" text-sm  md:w-1/2 ">
          <section className=" px-4">
            <p className=" text-2xl mb-5 lg:text-3xl ">
              Cristabel Armstrong Áramburo
            </p>
            <article className="text-slate-600 space-y-4  xl:text-lg ">
              <p className="">
                Soy una psicóloga clínica dedicada a brindar apoyo especializado
                a jóvenes que enfrentan desafíos de salud mental y adicciones.
                Mi enfoque se centra en crear un ambiente seguro y de confianza
                donde cada paciente pueda explorar sus emociones y desarrollar
                herramientas para una vida más plena.
              </p>{" "}
              <br />
              <p>
                Con más de 5 años de experiencia trabajando con adolescentes y
                jóvenes adultos, he desarrollado un enfoque integrador que
                combina técnicas basadas en evidencia con una comprensión
                profunda de las necesidades únicas de esta población.
              </p>
              <br />
              <p className="">
                Mi filosofía de trabajo se basa en la creencia de que cada
                persona tiene la capacidad innata de sanar y crecer. Mi papel es
                acompañarte en este proceso, proporcionando las herramientas y
                el apoyo necesarios para superar los obstáculos y alcanzar tus
                metas.
              </p>
            </article>
          </section>
          <article className="flex flex-wrap justify-center mt-11 gap-5">
            <section className=" flex flex-col items-center gap-1 w-28 text-center ">
              <img
                src={iconFamily}
                alt=""
                className=" bg-white p-2.5 rounded-xl shadow-sm "
              />
              <p className=" text-xl ">500+</p>
              <p className=" text-xs text-slate-600 ">Pacientes Atendidos</p>
            </section>
            <section className=" flex flex-col items-center gap-1 w-28 text-center ">
              <img
                src={iconWatch}
                alt=""
                className=" bg-white p-2.5 rounded-xl shadow-sm "
              />
              <p className=" text-xl ">5+</p>
              <p className=" text-xs text-slate-600 ">Años de experiencia</p>
            </section>
            <section className=" flex flex-col items-center gap-1 w-28 text-center ">
              <img
                src={iconHeart}
                alt=""
                className=" bg-white p-2.5 rounded-xl shadow-sm "
              />
              <p className=" text-xl ">95%</p>
              <p className=" text-xs text-slate-600 ">
                Satifacción del paciente
              </p>
            </section>
            <section className=" flex flex-col items-center gap-1 w-28 text-center ">
              <img
                src={iconMedal}
                alt=""
                className=" bg-white p-2.5 rounded-xl shadow-sm "
              />
              <p className=" text-xl ">24/7</p>
              <p className=" text-xs text-slate-600 ">Apoyo en crisis</p>
            </section>
          </article>
        </article>

        <article className=" md:w-1/2">
          <img src={imageAbout} alt="" className="rounded-2xl " />

          <section className=" bg-white rounded-2xl p-3 mt-8 ">
            <section className=" flex gap-4 items-center mb-4 text-xl text-slate-900">
              <img
                src={iconCertGraduation}
                alt=""
                className=" p-1.5 w-8 rounded-lg bg-blue-100 "
              />
              <p>Formación y Certificaciones</p>
            </section>
            <section className=" flex flex-col gap-4 ">
              <section className=" flex gap-2 items-start p-3 bg-gray-100 rounded-xl ">
                <img src={iconCertGraduation} alt="" className=" p-1.5 w-8 " />
                <section className=" flex flex-col gap-0.5 ">
                  <p className=" text-lg ">Licenciatura en Psicología</p>
                  <p className=" text-xs ">Universidad Nacional</p>
                  <p className="w-min mt-2 px-1.5 py-0.5 text-[.7rem] font-medium  border border-slate-400 rounded-md  ">
                    2018
                  </p>
                </section>
              </section>

              <section className=" flex gap-2 items-start p-3 bg-gray-100 rounded-xl ">
                <img src={iconCertMedal} alt="" className=" p-1.5 w-8 " />
                <section className=" flex flex-col gap-0.5 ">
                  <p className=" text-lg ">Maestría en Psicología Clínica</p>
                  <p className=" text-xs ">Instituto de Estudios Superiores</p>
                  <p className="w-min mt-2 px-1.5 py-0.5 text-[.7rem] font-medium  border border-slate-400 rounded-md  ">
                    2020
                  </p>
                </section>
              </section>

              <section className=" flex gap-2 items-start p-3 bg-gray-100 rounded-xl ">
                <img src={iconCertBook} alt="" className=" p-1.5 w-8 " />
                <section className=" flex flex-col gap-0.5 ">
                  <p className=" text-lg ">Especialización en Adicciones</p>
                  <p className=" text-xs ">Centro de Estudios en Adicciones</p>
                  <p className="w-min mt-2 px-1.5 py-0.5 text-[.7rem] font-medium  border border-slate-400 rounded-md  ">
                    2021
                  </p>
                </section>
              </section>

              <section className=" flex gap-2 items-start p-3 bg-gray-100 rounded-xl ">
                <img src={iconCertFamily} alt="" className=" p-1.5 w-8 " />
                <section className=" flex flex-col gap-0.5 ">
                  <p className=" text-lg ">Certificación en Terapia Juvenil</p>
                  <p className=" text-xs ">Asociación de Psicólogos</p>
                  <p className="w-min mt-2 px-1.5 py-0.5 text-[.7rem] font-medium  border border-slate-400 rounded-md  ">
                    2022
                  </p>
                </section>
              </section>
            </section>
          </section>
        </article>
      </section>
    </div>
  );
};

export default About;
