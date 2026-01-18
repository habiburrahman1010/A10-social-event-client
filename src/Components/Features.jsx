import React from "react";
import { FaUsers, FaCalendarAlt, FaHandsHelping, FaMapMarkedAlt } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-base-300 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Use Our Platform</h2>
        <p className="text-gray-500 mb-12">
          Organize, join, and manage social events easily in one place.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
         
          <div className="bg-base-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaCalendarAlt className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Easy Scheduling</h3>
            <p className="text-gray-500 text-sm">
              Create and manage events with simple date and time controls.
            </p>
          </div>

         
          <div className="bg-base-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaUsers className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Community Driven</h3>
            <p className="text-gray-500 text-sm">
              Connect with people and participate in meaningful activities.
            </p>
          </div>

         
          <div className="bg-base-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaHandsHelping className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Volunteer Friendly</h3>
            <p className="text-gray-500 text-sm">
              Join donation, plantation, and cleaning programs easily.
            </p>
          </div>

         
          <div className="bg-base-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaMapMarkedAlt className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Location Based</h3>
            <p className="text-gray-500 text-sm">
              Find nearby events and participate without hassle.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;
