import { useState } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../NavBar/NavBar';
import '../SignUp/sign.css';
import background from '../../assets/background.gif';
import UserService from '../../services/userService';

function SignIn() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  function signIn() {
    const user = {
      Email: Email,
      Password: Password,
    };
    UserService.UserSignIn(user).then((res) => {
      localStorage.setItem('isLogged', true);
      localStorage.setItem('User', JSON.stringify(res.data));
      navigate('/');
    });
  }

  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate('/signup');
  };
  return (
    <div>
      <Navbar />
      <img className="background" src={background} alt="backgound"></img>
      <div className="box">
        <div className="login form">
          <header>Login</header>
          <form action="#">
            <input
              type="text"
              className="input"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="button"
              className="input button login-button"
              value="Login"
              onClick={signIn}
            />
          </form>
          <div className="signup">
            <span className="signup">
              Don't have an account?
              <label className="signup-link" onClick={goToSignUp}>
                Register
              </label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
