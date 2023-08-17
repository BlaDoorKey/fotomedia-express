import React, { useState } from "react";

const Productos = () => {
  const products = [
    {
      id: 1,
      name: "Memorias USB",
      description: "Adata, Kingston 32 y 64 GB",
      imageUrl: "products/adata.png",
    },
    {
      id: 2,
      name: "Adaptadores",
      description: "Universal portátil Splitter Box",
      imageUrl: "products/adap.png",
    },
    {
      id: 3,
      name: "Cartulinas",
      description: "De distintos colores",
      imageUrl: "products/cartulina.png",
    },
    {
      id: 4,
      name: "Boligrafos",
      description: "PaperMate tinta ultra suave",
      imageUrl: "products/boligrafos.png",
    },
    {
      id: 5,
      name: "Cables de Carga",
      description: "Usb tipo C, HDMI",
      imageUrl: "products/cables.jpg",
    },
    {
      id: 6,
      name: "Plumones",
      description: "Usb tipo C, HDMI",
      imageUrl: "products/plumones.jpg",
    },

    // Add more products
  ];

  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      className="container mx-auto py-8"
      onMouseMove={handleMouseMove}>
      <h1 className="text-3xl font-semibold mb-4">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-lg shadow-lg p-4 transition-transform  ${
              hoveredProductId === product.id ? "transform scale-110" : ""
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
            </div>
            <div className="text-center">
              {" "}
              {/* Custom inline style */}
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
