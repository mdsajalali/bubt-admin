import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen px-4 md:px-0 flex flex-col items-center justify-center bg-white text-gray-900">
      {/* Header */}
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-center text-gray-700 mb-6">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>

      {/* Back to Home Button */}
      <Link href="/dashboard">
        <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
}
