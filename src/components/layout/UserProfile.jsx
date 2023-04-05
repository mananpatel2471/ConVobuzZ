import React from 'react';

function UserProfile({user}) {
  return (
    <div className="user-profile bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4 font-bold">Welcome, {user.name}!</h2>
      <div className="user-info flex items-center">
        <div className="user-avatar mr-4">
          <img src={user.avatar} alt={`${user.name}'s avatar`} className="w-24 h-24 rounded-full object-cover"/>
        </div>
        <div className="user-details">
          <p className="text-gray-600 text-lg mb-2 font-medium">Email: {user.email}</p>
          <p className="text-gray-600 text-lg mb-2 font-medium">Username: {user.username}</p>
          <p className="text-gray-600 text-lg mb-2 font-medium">Location: {user.location}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
