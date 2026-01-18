import React from "react";

const Banner = () => {
  return (
    <div className="bg-base-200">
      <div className="max-w-7xl mx-auto min-h-[80vh] flex items-center px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Organize & Join <br />
              <span className="text-blue-600">Meaningful Social Events</span>
            </h1>

            <p className="py-6 text-gray-600 max-w-lg">
              Create, manage and participate in plantation, donation and cleaning
              events that bring communities together for a better future.
            </p>

            <div className="flex gap-4">
              <button className="btn btn-primary px-8">
                Get Started
              </button>

              <button className="btn btn-outline px-8">
                Explore Events
              </button>
            </div>
          </div>

         
          <div className="relative">
            <img
              src="https://i.ibb.co.com/5XTzdxPV/photo-1501004318641-b39e6451bec6.jpg"
              className="rounded-2xl shadow-xl"
              alt="Tree Plantation"
            />
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
