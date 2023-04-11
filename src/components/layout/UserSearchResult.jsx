import React from 'react';
import UserSearchCard from "./UserSearchCard";
import {postChatRequest} from "../../utils/network";

const SearchResults = ({users}) => {
  return (
    <div className="search-results flex flex-col items-center">
      {users.map((user, i) => (
        <UserSearchCard
          index={i}
          name={user.name}
          email={user.email}
          mobile={user.mobile}
          handleRequestChat={postChatRequest}
        />
      ))}
    </div>
  );
};

export default SearchResults;
