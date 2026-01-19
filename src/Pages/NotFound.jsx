import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4">
      <h1 className="text-8xl font-bold text-indigo-600">404</h1>

      <h2 className="mt-4 text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-600 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block  text-white px-6 py-2 rounded-lg btn btn-primary"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
