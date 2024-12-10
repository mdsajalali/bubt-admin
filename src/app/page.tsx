import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex px-4 md:px-0 items-center justify-center bg-white">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-xl p-6">
        {/* Header */}
        <div className="bg-gray-800 text-white text-center py-3 rounded-t-lg shadow-md">
          <h1 className="font-semibold text-xl">BUBT CSE ADMIN</h1>
        </div>

        {/* Form */}
        <form className="mt-6">
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              id="username"
              type="text"
              className="mt-2 block w-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter username"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="mt-2 block w-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter password"
            />
          </div>

          <Link href="/dashboard">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Log in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
