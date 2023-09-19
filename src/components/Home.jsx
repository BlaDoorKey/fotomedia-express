import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="container mx-auto py-16">
        {/* Decorative elements */}

        {/* Main content */}
        <div className="text-center">
          <img
            src="Fotomedia.png"
            alt="Logo"
            className="mx-auto mb-4 animate-bounce"
            width={600}
            height={400}
          />
        </div>
        <div className="bg-gradient-to-tr from-gray-500 via-cyan-800 to-stone-500 p-8 rounded-lg shadow-lg text-center min-h-[25rem] grid grid-cols-1 md:grid-cols-1 gap-8 place-content-center">
          <div className="block">
            <h1 className="text-6xl font-extrabold mb-4 text-white">¡Tu Solución digital #1!</h1>
            <p className="text-gray-300 text-xl">
              Descubre la solución definitiva para potenciar tus fotografías.
            </p>
            <button className="mt-6 py-3 px-8 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <a href="/contact">Descubrelo ahora!</a>
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="text-center">
              <p className="text-4xl font-bold rainbow-text">En demanda</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="feature/etiquetas.jpg"
                alt="Featured Item 1"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="feature/folderspersonales.jpg"
                alt="Featured Item 2"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="feature/pet.jpg"
                alt="Featured Item 3"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
