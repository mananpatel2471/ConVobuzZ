import React from 'react';
import UserSearchCard from "./UserSearchCard";

const SearchResults = ({users}) => {
  return (
    <div className="search-results flex flex-col items-center">
      {users.map((user, i) => (
        <UserSearchCard
          key={i}
          name={user.name}
          email={user.email}
          mobile={user.mobile}
        />
      ))}
    </div>
  );
};

export default SearchResults;
