import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex px-4 md:px-0 items-center justify-center bg-gray-900">
      <div className="w-full max-w-sm bg-gray-800 rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="bg-blue-700 text-white text-center py-2 rounded-t-lg">
          <h1 className="font-semibold text-lg">BUBT CSE ADMIN</h1>
        </div>

        {/* Form */}
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username:
            </label>
            <input
              id="username"
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
          </div>

          <Link href="/dashboard">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Log in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
