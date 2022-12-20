import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '../images/Octocat.png';
import './Header.css';
import { useSelector } from 'react-redux';
const Header = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  // const [username, setUsername] = useState('');
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const getUser = async () => {
  //     const res = await fetch(`https://api.github.com/users/${username}`);
  //     const data = await res.json();
  //     console.log(data);
  //     setData(data);
  //   };
  //   getUser();
  // };
  return (
    <div className="header">
      <h1 className="header__title">
        Deepak <span>Github</span> Application
      </h1>
      <p>
        <Link to="/products">products</Link>
      </p>
      <div>
        <Link to="/cart">
          Cart <span>{totalQuantity}</span>
        </Link>
      </div>
      <img src={githubLogo} alt="github logo" className="header__logo" />
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button>submit</button>
      </form> */}
    </div>
  );
};

export default Header;

{
  /* <div className="container">
<h1>Github api project</h1>

{Object.keys(data).length > 0 && (
  <div>
    <img
      src={data.avatar_url}
      alt={data.login}
      style={{ width: '200px', borderRadius: '50%' }}
    />
    <h2>{data.name}</h2>
    <h2>{data.login}</h2>
    <p>followers: {data.followers}</p>
    <p>following: {data.following}</p>

    <h4 onClick={handleRepos}>public repos: {data.public_repos}</h4>
    {repos && (
      <div>
        {repos.map((repo) => (
          <div>{repo.name}</div>
        ))}
        <button onClick={() => handleRepos(2)}>Load more</button>
      </div>
    )}
  </div>
)}
</div> */
}
