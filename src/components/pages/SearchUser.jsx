import axios from "axios";
import {setErrorState} from "../../state/global";
import config from "../../config/default";
import {useEffect, useState} from "react";
import UserSearchResult from "../layout/UserSearchResult";
import {useNavigate} from "react-router-dom";


const SearchUser = () => {

  const SERVER_URL = config.SERVER_URL;
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector('#btn-search').addEventListener('click', (e) => {
      const val = document.querySelector("#search-user").value;
      onSearch(val);
    })
  }, [])
  const onSearch = (name) => {
    //const name = document.querySelector('#searchUser').value;
    console.log(name)
    const data = {searchStr: name};
    axios.get(`${SERVER_URL}/api/searchUser`, {method: "GET", params: data})
      .then((res) => {
        setUsers([...res.data]);
        console.log(users)
      })
      .catch((err) => {
        console.log(err)
        const code = err.response.status;
        const {error, description, trace} = err.response.data;
        setErrorState(code, error, description, trace);
        //console.log(err)
        navigate('/error');
      }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className="search-users  flex flex-col justify-center ">
      <div className="search-bar flex justify-center">
        <input
          id="search-user"
          type="text"
          placeholder="Search by user name"
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
            width: '100%',
            maxWidth: '500px'
          }}
        />
        <button id="btn-search">
          Search
        </button>
      </div>
      <UserSearchResult users={users}/>
    </div>
  );

}

export default SearchUser;