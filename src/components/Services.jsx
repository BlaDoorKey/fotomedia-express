import React, { useState } from "react";

const Services = () => {
  const products = [
    {
      id: 1,
      name: "Fotos identificación",
      description: "Tomadas al momento",
      imageUrl: "assets/fotosid.png",
    },
    {
      id: 2,
      name: "Reparación de PC's y Laptops",
      description: "Mantenimiento sistema operativo y software",
      imageUrl: "assets/laptops.png",
    },
    {
      id: 3,
      name: "Impresiones, Copias y Escaneo",
      description: "A color o b/n",
      imageUrl: "assets/impresora.png",
    },
    {
      id: 4,
      name: "Restauración de fotos antiguas",
      description: "A color y b/n",
      imageUrl: "assets/rest.png",
    },
    {
      id: 5,
      name: "Camisas Personalizadas",
      description: "A medida",
      imageUrl: "assets/camisabarbie.png",
    },
    {
      id: 6,
      name: "Transferencia de Videos",
      description: "VHS o Beta a archivos o DVD",
      imageUrl: "assets/vhs.png",
    },
    {
      id: 7,
      name: "Digitalización",
      description: "Cassette o vinilo a Archivo o CD",
      imageUrl: "assets/vinilo.png",
    },
    {
      id: 8,
      name: "Termos personalizados",
      description: "Diseños a su gusto",
      imageUrl: "assets/termos.png",
    },
    {
      id: 9,
      name: "Folders personalizados",
      description: "Diseños a su gusto",
      imageUrl: "assets/folders.png",
    },
    {
      id: 10,
      name: "Edición de video",
      description: "Edición sencilla con retoques",
      imageUrl: "assets/video.png",
    },
  ];

  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="container mx-auto py-8"
      >
      <h1 className="text-3xl font-semibold mb-4 mx-auto">Servicios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-lg shadow-md p-4 transition-transform border-2 border-black ${
              hoveredProductId === product.id ? "transform scale-110 bg-slate-200 transition ease-in" : ""
            }`}
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}>
            <div
              className={`relative overflow-hidden ${
                hoveredProductId === product.id ? "scale-110" : ""
              }`}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-32 object-cover"
              />
              {hoveredProductId === product.id && (
                <div
                  className="absolute inset-0 transform scale-150 origin-center transition ease-in"
                  style={{
                    left: cursorPosition.x + "px",
                    top: cursorPosition.y + "px",
                  }}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="text-center">
            <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
