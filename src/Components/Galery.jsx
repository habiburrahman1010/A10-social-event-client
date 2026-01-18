import React from "react";

const Gallery = () => {
  return (
    <div className="bg-base-200 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Event Gallery</h2>
        <p className="text-gray-500 mb-12">
          Moments from our community events and social activities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
         
          <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://i.ibb.co.com/VYsrcnYZ/photo-1524602585632-a2a01c12307c.jpg"
              alt="Plantation Event"
              className="w-full h-64 object-cover hover:scale-110 transition duration-300"
            />
          </div>

         
          <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://i.ibb.co.com/0VVnMnvt/photo-1598335624134-5bceb5de202d.jpg"
              alt="Donation Event"
              className="w-full h-64 object-cover hover:scale-110 transition duration-300"
            />
          </div>

         
          <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://i.ibb.co.com/FqHJ4cxY/premium-photo-1742493660810-3446b3c36fbf.jpg"
              alt="Cleaning Drive"
              className="w-full h-64 object-cover hover:scale-110 transition duration-300"
            />
          </div>

          
          <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://i.ibb.co.com/qLLw5fFH/photo-1615461066159-fea0960485d5.jpg"
              alt="Community Meet"
              className="w-full h-64 object-cover hover:scale-110 transition duration-300"
            />
          </div>

          
          <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://i.ibb.co.com/r22pnK8f/photo-1639772823849-6efbd173043c.jpg"
              alt="Volunteer Work"
              className="w-full h-64 object-cover hover:scale-110 transition duration-300"
            />
          </div>

          
          <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://i.ibb.co.com/DDjsYmRS/photo-1608012075343-25226e3099f0.jpg"
              alt="Social Event"
              className="w-full h-64 object-cover hover:scale-110 transition duration-300"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gallery;
