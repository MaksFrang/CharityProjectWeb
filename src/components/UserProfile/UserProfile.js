// import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import background from '../../assets/background.gif'
// import UserService from '../../services/userService';
// import { useEffect } from 'react';

function UserProfile() {
  //   const [userData, setUserData] = useState();
  //     const [userId, setUserId] = useState(0);
  //   const userId = localStorage.getItem('User');

  //     useEffect(() => {
  //       getUserData(userId);
  //     }, [userId]);

  //   async function getUserData(id) {
  //     await UserService.UserGet(id).then((res) => {
  //       console.log(res.data);
  //       return setUserData(res.data);
  //     });
  //   }

  return (
    <div>
      <NavBar />
		<img className="background" src={background} alt="backgound"></img>
      <div className="wrapper">
        <div className="backgound-image">
          <img src="" alt="background" />
        </div>
        <div className="container">
          <div className="avatar-container">
            <img src="" alt="avatar" />
          </div>
          <h3></h3>
          <p>Posts: 3</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
