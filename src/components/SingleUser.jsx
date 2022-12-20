import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Repos from './Repos';
import './SingleUser.css';
const SingleUser = () => {
  const [singleUserData, setSingleUserData] = useState({});
  const { user } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();
      setSingleUserData(data);
    };
    fetchUser();
  }, [user]);

  // const handleClick = () => {
  //   navigate(-1, { replace: true });
  // };
  return (
    <div className="box">
      <div>
        <Link to={'/'}>
          <button className="back-button">Back</button>
        </Link>

        <div className="single-card">
          <div className="img-container">
            <img src={singleUserData.avatar_url} alt="avatar" />
          </div>
          <div className="content-container">
            <div className="card__name">
              <h2>{singleUserData.name}</h2>
              <h4>{singleUserData.login}</h4>
            </div>
            <p>{singleUserData.bio}</p>
            <div className="card__contents">
              <svg
                text="muted"
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-people"
              >
                <path
                  fillRule="evenodd"
                  d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                ></path>
              </svg>
              <p>Followers: {singleUserData.followers}</p>
              <p>Following: {singleUserData.following}</p>
            </div>

            <div className="card__repos">
              <button className="card__repo-button">
                Public Repos: {singleUserData.public_repos}
              </button>
            </div>
          </div>
        </div>
        <h1 className="public-repos-title">Public Repos</h1>
        <Repos />
      </div>
    </div>
  );
};

export default SingleUser;
