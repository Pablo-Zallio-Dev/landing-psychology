import iconQuote from "../../assets/icons/icon-quote.svg";
import iconStar from "../../assets/icons/icon-star.svg";

const Review = () => {
  return (
    <>
      <section
        id="review"
        className=" flex flex-col items-center justify-center gap-20 py-14 "
      >
        <section className=" px-3 max-w-2xl text-center lg:text-lg ">
          <h1 className=" text-3xl  ">Testimonios</h1>
          <p className=" my-6 text-slate-600">
            Estas son algunas experiencias reales de pacientes que han
            encontrado el apoyo y las herramientas necesarias para mejorar su
            bienestar mental.
          </p>
          <p className=" text-xs text-slate-500 ">
            *Los nombres han sido cambiados para proteger la privacidad de los
            pacientes.
          </p>
        </section>
        <section className=" flex justify-center items-center flex-wrap gap-8 w-full px-3 max-w-[1600px]  ">
          <section className=" p-3 lg:p-6 w-full h-72 max-w-[400px] rounded-xl bg-slate-50 shadow-lg hover:shadow-xl transition-shadow duration-300   ">
            <img src={iconQuote} alt="" />
            <p className=" py-4 text-slate-900 text-sm">
              "La Dra. Martínez me ayudó a entender y controlar mi relación con
              las redes sociales. Su enfoque fue muy comprensivo y nunca me
              sentí juzgada. Ahora tengo herramientas para mantener un
              equilibrio saludable."
            </p>
            <section className="flex">
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
            </section>
            <section className=" mt-5 py-3 border-t border-t-gray-300 ">
              <section className="flex items-end gap-1 ">
                <p className="">Maria G.</p>
                <p className=" text-slate-500 text-xs ">(19 Años)</p>
              </section>
              <p className="mt-1.5 text-slate-500 text-xs ">
                Terapia para adicción a redes sociales
              </p>
            </section>
          </section>

          <section className=" p-3 lg:p-6 w-full h-72 max-w-[400px] rounded-xl bg-slate-50 shadow-lg hover:shadow-xl transition-shadow duration-300   ">
            <img src={iconQuote} alt="" />
            <p className=" py-4 text-slate-900 text-sm">
              "Después de meses luchando con ansiedad, finalmente encontré la
              ayuda que necesitaba. Las sesiones me dieron claridad y técnicas
              prácticas que uso todos los días. Mi calidad de vida mejoró
              significativamente."
            </p>
            <section className="flex">
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
            </section>
            <section className=" mt-5 py-3 border-t border-t-gray-300 ">
              <section className="flex items-end gap-1 ">
                <p className="">Carlos M.</p>
                <p className=" text-slate-500 text-xs ">(22 Años)</p>
              </section>
              <p className="mt-1.5 text-slate-500 text-xs ">
                Terapia individual para ansiedad
              </p>
            </section>
          </section>

          <section className=" p-3 lg:p-6 w-full h-72 max-w-[400px] rounded-xl bg-slate-50 shadow-lg hover:shadow-xl transition-shadow duration-300   ">
            <img src={iconQuote} alt="" />
            <p className=" py-4 text-slate-900 text-sm">
              "Nuestra familia estaba pasando por un momento muy difícil. La
              doctora nos ayudó a comunicarnos mejor y a entender las
              perspectivas de cada uno. Ahora nuestro hogar es más armonioso."
            </p>
            <section className="flex">
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
            </section>
            <section className=" mt-5 py-3 border-t border-t-gray-300 ">
              <section className="flex items-end gap-1 ">
                <p className="">Familia Rodriguez.</p>
                <p className=" text-slate-500 text-xs "></p>
              </section>
              <p className="mt-1.5 text-slate-500 text-xs ">
                Terapia familiar.
              </p>
            </section>
          </section>

          <section className=" p-3 lg:p-6 w-full h-72 max-w-[400px] rounded-xl bg-slate-50 shadow-lg hover:shadow-xl transition-shadow duration-300   ">
            <img src={iconQuote} alt="" />
            <p className="  py-4 text-slate-900 text-sm">
              "Pensé que nunca me sentiría mejor, pero con la ayuda de la Dra.
              Martínez pude superar mi depresión. Su paciencia y metodología me
              dieron esperanza cuando más la necesitaba."
            </p>
            <section className="flex">
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
            </section>
            <section className=" mt-5 py-3 border-t border-t-gray-300 ">
              <section className="flex items-end gap-1 ">
                <p className="">Andrea L.</p>
                <p className=" text-slate-500 text-xs ">(17 Años)</p>
              </section>
              <p className="mt-1.5 text-slate-500 text-xs ">
                Tratamiento para depresión
              </p>
            </section>
          </section>

          <section className=" p-3 lg:p-6 w-full h-72 max-w-[400px] rounded-xl bg-slate-50 shadow-lg hover:shadow-xl transition-shadow duration-300   ">
            <img src={iconQuote} alt="" />
            <p className=" py-4 text-slate-900 text-sm">
              "Durante una crisis personal muy intensa, la doctora estuvo
              disponible cuando más la necesité. Su intervención rápida y
              efectiva me ayudó a estabilizarme y encontrar soluciones."
            </p>
            <section className="flex">
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
            </section>
            <section className=" mt-5 py-3 border-t border-t-gray-300 ">
              <section className="flex items-end gap-1 ">
                <p className="">Miguel S.</p>
                <p className=" text-slate-500 text-xs ">(20 Años)</p>
              </section>
              <p className="mt-1.5 text-slate-500 text-xs ">
                Apoyo en crisis personal
              </p>
            </section>
          </section>

          <section className=" p-3 lg:p-6 w-full h-72 max-w-[400px] rounded-xl bg-slate-50 shadow-lg hover:shadow-xl transition-shadow duration-300   ">
            <img src={iconQuote} alt="" />
            <p className=" py-4 text-slate-900 text-sm">
              "Aprendí a entender y manejar mis emociones de una manera
              completamente nueva. Las técnicas que me enseñó me han ayudado no
              solo en terapia, sino en todas las áreas de mi vida."
            </p>
            <section className="flex">
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
              <img src={iconStar} alt="" />
            </section>
            <section className=" mt-5 py-3 border-t border-t-gray-300 ">
              <section className="flex items-end gap-1 ">
                <p className="">Sofia P.</p>
                <p className=" text-slate-500 text-xs ">(18 Años)</p>
              </section>
              <p className="mt-1.5 text-slate-500 text-xs ">
                Terapia para manejo de emociones
              </p>
            </section>
          </section>
        </section>
        <section className=" flex flex-col items-center gap-5 p-6 mx-5 max-w-3xl rounded-md bg-blue-50 ">
          <p className=" text-xl text-center ">
            Tu Historia de Éxito Puede Comenzar Hoy
          </p>
          <p className=" text-center text-sm text-slate-700 ">
            Cada persona tiene una historia única y merece el apoyo adecuado. Si
            te identificas con alguna de estas experiencias o estás enfrentando
            tus propios desafíos, no dudes en dar el primer paso.
          </p>
          <section className=" flex flex-col sm:flex-row gap-4 ">
            <a
            
              type="button"
              className="btn btn-primary primary py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              <a href="#quote"> Agendar mi primera cita </a>
            </a>
            <a
              type="button"
              className=" btn btn-primary border border-blue-700 rounded-md py-2 px-4 text-sm text-blue-700 "
            >
              <a href=""> Hacer una consulta </a>
            </a>
          </section>
        </section>
      </section>
    </>
  );
};

export default Review;
