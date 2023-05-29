import { useState } from 'react';
import Navbar from '../NavBar/NavBar';
import background from '../../assets/background.gif';
import '../SignUp/sign.css';
import UserService from '../../services/userService';

function AddPost() {
  const [header, setHeader] = useState('');
  const [desription, setDesription] = useState('');
  const [money, setMoney] = useState(0);

  async function add() {
    const postData = {
      userID: 7,
      money: money,
      header: header,
      images: null,
      desription: desription,
      lattitude: null,
      longtitude: null,
      tags: null,
    };
    console.log(postData);
    await UserService.UserPostAdd(postData);
  }

  return (
    <div>
      <Navbar />
      <img className="background" src={background} alt="backgound"></img>
      <div className="box">
        <div className="registration form">
          <header>Add post</header>
          <input
            className="input"
            type="text"
            placeholder="Enter post header"
            onChange={(e) => setHeader(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Enter post description"
            onChange={(e) => setDesription(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Enter required contribution amount"
            onChange={(e) => setMoney(e.target.value)}
          />
          <button type="submit" className="button input" value="Add post" onClick={() => add()}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
