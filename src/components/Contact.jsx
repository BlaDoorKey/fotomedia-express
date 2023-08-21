import React from "react";

const Contact = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-8 text-gray-800">
          ¡Contáctanos para obtener atención personalizada!
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-16">
          <a
            href="https://wa.me/5212291993281"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 border-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition duration-300">
            <img
              src="logowa.png"
              alt="WhatsApp"
              className="w-8 h-8 mr-2"
            />
            WhatsApp
          </a>
          <a
            href="https://www.facebook.com/fotomediaexpress"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 border-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
            <img
              src="logofb.png"
              alt="Facebook"
              className="w-8 h-8 mr-2"
            />
            Facebook
          </a>
          <a
            href="mailto:photomediaexpres@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 border-2 rounded-md bg-blue-700 text-white hover:bg-blue-800 transition duration-300">
            <img
              src="logomail.png"
              alt="Gmail"
              className="w-8 h-8 mr-2"
            />
            Correo
          </a>
        </div>
        <div className="w-full relative">
        <p className="text-black text-4xl text-center underline">
            Av. Graciano Sánchez 7, Primero de Mayo Sur, Boca del Río, Ver. México
          </p>
          <div className="w-full h-0 relative overflow-hidden pb-56 border border-8 border-red-600 rounded-md mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2360960084457!2d-96.12666322394215!3d19.141139949922646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3410edd6ca9b9%3A0x15a7d286463ccf63!2sFotomedia%20Express!5e0!3m2!1ses!2smx!4v1692297964918!5m2!1ses!2smx"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full"></iframe>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
