import { Navbar } from "@/components/admin-panel/navbar";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar title="Tags" />
      <div className="flex items-center justify-center p-6">
        <form className="w-full max-w-lg bg-white p-8 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Create Tag
          </h2>
          <div className="mb-4">
            <label
              htmlFor="tagName"
              className="block text-gray-600 mb-1 font-medium"
            >
              Tag Name
            </label>
            <input
              type="text"
              id="tagName"
              placeholder="Enter tag name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tagType"
              className="block text-gray-600 mb-1 font-medium"
            >
              Tag Type
            </label>
            <select
              id="tagType"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            >
              <option value="">Select type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-600 mb-1 font-medium"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Enter description"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
