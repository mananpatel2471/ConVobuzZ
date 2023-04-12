import React, {useContext} from 'react';
import { getUser } from "../../state/global";

function HomePage() {
  const user = getUser();
  console.log("User in home page",user)

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to our website!</h1>
      <p className="text-lg mb-4">Thank you for joining us, {user.name}!</p>
      <div className="flex items-center mb-4">
        <img src={user.avatar} alt={`${user.name}'s avatar`} className="w-16 h-16 rounded-full mr-4"/>
        <div>
          <p className="text-xl font-medium">{user.name}</p>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
      <p className="text-lg">Here's some information about your account:</p>
      <ul className="list-disc pl-8">
        <li>Username: {user.email}</li>
        <li>Location: {user.name}</li>
        <li>Join date: {user.mobile}</li>
      </ul>
    </div>
  );
}

export default HomePage;
