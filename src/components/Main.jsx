import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') return;
    const fetchUser = async () => {
      const res = await fetch(
        `https://api.github.com/search/users?q=${username}`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );
      const data = await res.json();

      setUserData(data);
    };
    fetchUser();
  };

  return (
    <div className="container">
      <div className="search-form">
        <h2>GitHub Search User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="input-text"
          />
          <button className="button">Search</button>
        </form>
      </div>
      {/* ////////////////////////search bar */}
      <div>
        <h4>{userData?.incomplete_results}</h4>
        <div className="content">
          {userData?.items?.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img
                  src={item.avatar_url}
                  alt="avatar"
                  className="card__avatar"
                />

                <p className="card__title">{item.login}</p>
                <Link to={`/${item.login}`}>
                  <button className="card__button">view profile</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
