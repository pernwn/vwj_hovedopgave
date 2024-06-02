import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="px-6 py-12 bg-white rounded-md shadow-md">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Oops! Page not found.</p>
        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <Link href="/">
            <a className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Go Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
