import { useNavigate } from 'react-router';
import Navbar from '../NavBar/NavBar';
import background from '../../assets/background.gif';
import ReactDatePicker from 'react-datepicker';
import Resizer from 'react-image-file-resizer';
import './sign.css';
import { useState } from 'react';

function SignUp() {
  const [date, setDate] = useState(new Date());
  const [file, setFile] = useState();
  const [firstName, setFirstName] = useState();
  const [secondName, setSecondName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const register = () => {
    const user = {
      firstName: firstName,
      secondName: secondName,
      email: email,
      password: password,
      data: date,
      image: file,
    };
    console.log(user);
    // SignUpService(user).then(() => navigate("/signin"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const onSelectFile = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(undefined);
      return;
    }
    const result = await resizeFile(e.target.files[0]);
    setFile(result);
    e.target.value = '';
  };
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        60,
        60,
        'JPEG',
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        'base64',
      );
    });

  const navigate = useNavigate();
  const goToLogIn = () => {
    navigate('/signin');
  };

  return (
    <div>
      <Navbar />
      <img className="background" src={background} alt="backgound"></img>
      <div className="box">
        <div className="registration form">
          <header>Register</header>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Enter your surname"
              onChange={(e) => setSecondName(e.target.value)}
            />
            <input
              type="text"
              className="input"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="Create a password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="filepicker" className="button">
              Pick an image
            </label>
            <input type="file" id="filepicker" className="inputfile" onChange={onSelectFile} />
            <ReactDatePicker
              selected={date}
              onChange={(res) => setDate(res)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className="input date-picker"
              placeholderText="Select your date of birth"
            />
            <input type="submit" className="button input" value="Sign Up" onClick={register} />
          </form>
          <div className="signup">
            <span className="signup">
              Already have an account?
              <label onClick={goToLogIn}>Login</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
