import React from 'react';
import {Link} from 'react-router-dom';
import {getUser} from "../../state/global";

function HomePage({}) {
  const user = getUser()
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">My App</h1>
          <button className="text-sm">
            Logout
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-100 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center justify-between py-2 px-4">
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/" className="text-gray-800 font-medium">Home</Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-gray-500 hover:text-gray-800 font-medium">Dashboard</Link>
            </li>
            <li>
              <Link to="/messages" className="text-gray-500 hover:text-gray-800 font-medium">Messages</Link>
            </li>
            <li>
              <Link to="/profile" className="text-gray-500 hover:text-gray-800 font-medium">Profile</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-gray-300 w-8 h-8"></div>
            <span>{user.name}</span>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow bg-gray-50 p-6">
        <h2 className="text-lg font-medium mb-4">Welcome to My App</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo sit amet
          turpis vulputate facilisis. Proin rutrum ultrices bibendum.</p>
      </main>
    </div>
  );
}

export default HomePage;
