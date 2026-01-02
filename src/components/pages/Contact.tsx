import CardContact from "../ui/CardContact";
import FormContact from "../ui/FormContact";

const Contact = () => {
  return (
    <>
      <section id="contact" className=" bg-gray-50 pb-20 ">
        <section className=" flex flex-col items-center  ">
          <p className=" text-3xl mt-12 text-center ">Contacto</p>

          <p className=" max-w-lg  mt-4 mb-20 px-6 sm:px-0 text-center leading-5 ">
            Estoy aquí para ayudarte. Puedes contactarme de múltiples formas o
            enviar tu consulta directamente a través del formulario.
          </p>

          <section className=" flex flex-col w-full items-start  lg:items-start gap-10 lg:flex-row lg:justify-center lg:px-20 xl:max-w-7xl ">
            <CardContact />
            <FormContact />
          </section>
        </section>
      </section>
    </>
  );
};

export default Contact;
