import React from "react";
import Button from "../ui/Button";
import imageHome from "../../assets/images/image-home.webp";

const Home = () => {
  return (
    <div
      id="home"
      className=" lg:flex lg:justify-center lg:gap-6 xl:gap-16 px-4  p-10 bg-[linear-gradient(90deg,rgb(240,246,254)_0%,rgb(247,247,247)_100%)] xl:px-18 2xl:px-60 "
    >
      <section className="lg:w-1/2 lg:flex lg:flex-col lg:justify-evenly xl:w-xl ">
        <section className=" flex flex-col gap-10 ">
          <h1 className=" text-4xl lg:text-5xl leading-tight ">
            Apoyo Especializado en{" "}
            <span className="text-blue-600"> Salud Mental Juvenil </span>
          </h1>
          <p className=" text-gray-500 leading-relaxed text-lg ">
            Como psicóloga especializada en adicciones y problemas de salud
            mental en jóvenes, ofrezco un espacio seguro y profesional para la
            sanación y el crecimiento personal. Juntos podemos construir el
            camino hacia una vida más plena.
          </p>
        </section>
        <section className=" flex flex-col gap-4 my-8 sm:flex-row">
          <Button className="primary py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
            Solicitar consulta
          </Button>
          <Button className="primary py-3 px-4 bg-white border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
            Conocer Servicios
          </Button>
        </section>
        <section className=" flex flex-col sm:flex-row gap-6 sm:justify-between mb-8 lg:mb-0 ">
          <section className="flex items-center gap-3 ">
            {/* svg */}
            <article className=" w-min rounded-lg bg-blue-100 p-1.5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#155dfc"
                  d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                />
              </svg>
            </article>
            {/* section */}
            <section className="">
              <p className=" text-sm text-slate-600 ">Enfoque</p>
              <p className="font-medium text-slate-900">Compasivo</p>
            </section>
          </section>
          <section className="flex items-center gap-3 ">
            {/* svg */}
            <article className=" w-min rounded-lg bg-green-100 p-1.5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#00a63e"
                  d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21"
                />
              </svg>
            </article>
            {/* section */}
            <section className="">
              <p className=" text-sm text-slate-600 ">Ambiente</p>
              <p className="font-medium text-slate-900">Seguro</p>
            </section>
          </section>
          <section className="flex items-center gap-3 ">
            {/* svg */}
            <article className=" w-min rounded-lg bg-purple-100 p-1.5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#9f1ffb"
                  d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"
                />
              </svg>
            </article>
            {/* section */}
            <section className="">
              <p className=" text-sm text-slate-600 ">Disponibilidad</p>
              <p className="font-medium text-slate-900">Flexible</p>
            </section>
          </section>
        </section>
      </section>
      <section className=" lg:w-1/2 xl:w-xl ">
        <img
          src={imageHome}
          alt=""
          className="w-full h-[500px] object-cover rounded-2xl"
        />
      </section>
    </div>
  );
};

export default Home;
