import React, { useState, useEffect } from "react";


const images = [
    "/igti-certificado.jpg",
    "/sql-curso.png",
  "/angular-certificado.png",
];

const Carousel: React.FC= () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const expandImage = (image: string) => {
    setExpandedImage(image);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  useEffect(() => {
    const timer = setTimeout(nextImage, 2000);
    return () => clearTimeout(timer);
  }, [currentImage]);

  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        <div className="relative">
          <div className="relative h-64 md:h-96">
            <img
              src={images[currentImage]}
              alt="Carousel Image"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => expandImage(images[currentImage])}
            />
          </div>
          {expandedImage && (
            <div className="cursor-pointer fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50"           onClick={closeExpandedImage}>
              <div className="max-w-screen-lg mx-auto">
                <img
                  src={expandedImage}
                  alt="Expanded Image"
                  className="max-w-full max-h-full"
        
                />
              </div>
            </div>
          )}
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-8 p-2 bg-black bg-opacity-70 rounded-full w-[40px] font-black"
            onClick={prevImage}
          >
           &#8249;
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-8 p-2 bg-black bg-opacity-70 rounded-full w-[40px] font-black"
            onClick={nextImage}
          >
                 &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
