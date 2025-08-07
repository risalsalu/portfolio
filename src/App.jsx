import React from 'react';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-sm w-full">
        <img
          className="rounded-lg mb-4"
          src="https://via.placeholder.com/400x200"
          alt="Card"
        />
        <h2 className="text-xl font-bold text-gray-800 mb-2">Tailwind Card</h2>
        <p className="text-gray-600 mb-4">
          This is a simple card component styled with Tailwind CSS inside a React app.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Read More
        </button>
      </div>
    </div>
  );
}

export default App;
