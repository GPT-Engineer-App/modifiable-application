import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Bare-Bones App</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a minimalistic application. You can modify and build upon this structure.
      </p>
      <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        <FaPlus className="mr-2" />
        Add New Feature
      </button>
    </div>
  );
};

export default Index;