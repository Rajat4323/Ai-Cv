import React from "react";

const ShortlistedCV = () => {
  // Array of image URLs
  const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
    "/image6.png",
  ];

  return (
    <div>
      <header className="flex md:flex-row justify-between md:items-center mb-5">
        <h2 className="text-2xl font-bold mt-[50px]">Shortlisted CV's</h2>
        <div className="text-gray-600 flex items-center">
          <div className="md:mb-14">
            <p className="font-semibold text-lg"> Hi, Username </p>
            <p className="text-blue-500 font-semibold text-sm ml-2">
              Credits Left: 300
            </p>
          </div>
          <img
            src="/image7.png"
            alt="Profile"
            className="h-12 w-12 rounded-full ml-1 md:mb-14"
          />
        </div>
      </header>

      <section className="space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-start md:items-center bg-white shadow rounded-lg p-4 space-y-4 md:space-y-0 md:space-x-9"
          >
            {/* Profile Section */}
            <div className="flex items-center space-x-1 md:space-x-2">
              <input
                type="checkbox"
                className="h-3 w-3 text-blue-500"
              />
              <img
                src={image} // Different image for each row
                alt={`Profile ${index + 1}`}
                className="h-12 w-12 rounded-2xl"
              />
              <div className="mt-0 ml-2">
                <h3 className="font-bold whitespace-nowrap">John Doe</h3>
                <p className="text-gray-500 text-sm">
                  UI/UX Designer
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-3 md:mt-0">
              From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.
            </p>

            {/* Skills */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold">Skills:</span>
              {[...Array(5)].map((_, skillIndex) => (
                <div
                  key={skillIndex}
                  className="relative flex items-center justify-center h-6 w-6 bg-blue-500 rounded-full"
                >
                  <div className="h-3 w-3 bg-white"></div>
                </div>
              ))}
            </div>

            {/* Download Button */}
            <button className="bg-[#0075FF] text-white px-4 py-2 rounded-xl shadow hover:bg-[#0135FF]">
              Download for 30 credits
            </button>
            <div className="absolute top-0 right-2 md:static">
              <button
                className="bg-[#0075FF] hover:bg-[#0135FF] text-white font-medium h-5 w-5 flex items-center justify-center rounded"
              >
                -
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ShortlistedCV;
