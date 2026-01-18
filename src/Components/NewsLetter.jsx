import React from "react";

const Newsletter = () => {
    return (
        <div className="bg-base-100 py-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-base-300 rounded-2xl shadow-lg p-10 text-center">
                    <h2 className="text-3xl font-bold mb-3">
                        Subscribe to Our Newsletter
                    </h2>

                    <p className="text-gray-500 mb-8">
                        Get updates about upcoming events, community activities, and special
                        programs directly in your inbox.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />

                        <button className="btn btn-primary px-8 py-3 rounded-lg">
                            Subscribe
                        </button>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
