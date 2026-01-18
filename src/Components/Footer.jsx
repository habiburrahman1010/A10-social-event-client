import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 px-6 py-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        SE
                    </div>
                    <span className="font-bold text-lg">Social Events</span>
                </div>


                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} All rights reserved
                </p>


                <div className="flex gap-4 text-gray-600">
                    <a className="hover:text-blue-700 transition">
                        <FaFacebookF />
                    </a>

                    <a className="hover:text-red-600 transition">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
