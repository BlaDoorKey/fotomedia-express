import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">¡Tu Solución digital #1!</h1>
          <p className="text-xl text-gray-200 mb-8">Descubre la solución definitiva para potenciar tus fotografías.</p>
          <a href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Descúbrelo ahora
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">En demanda</h2>
          <p className="text-gray-600 mt-2">Estos son nuestros productos y servicios más populares.</p>
        </div>

        {/* Featured Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="/feature/etiquetas.jpg" alt="Etiquetas" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Etiquetas Personalizadas</h3>
              <p className="text-gray-600">Crea etiquetas únicas para tus productos y eventos.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="/feature/folderspersonales.jpg" alt="Folders Personales" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Folders Personales</h3>
              <p className="text-gray-600">Organiza tus documentos con estilo.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="/feature/pet.jpg" alt="Impresiones en PET" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Impresiones en PET</h3>
              <p className="text-gray-600">Material resistente y de alta calidad para tus impresiones.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;