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
          <div className="bg-gradient-to-tr from-gray-500 via-cyan-800 to-stone-500 p-8 rounded-lg shadow-lg text-center min-h-[25rem] grid place-content-center">
            <div>
              <h1 className="text-6xl font-extrabold mb-4 text-white">¡Tu Solución digital #1!</h1>
              <p className="text-gray-300 text-xl">
                Descubre la solución definitiva para potenciar tus fotografías.
              </p>
              <button className="mt-6 py-3 px-8 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <a href="/contact">Descubrelo ahora!</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
