import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AddPost from './components/AddPost/AddPost';
import UserProfile from './components/UserProfile/UserProfile';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="SignIn" element={<SignIn />}></Route>
      <Route path="SignUp" element={<SignUp />}></Route>
      <Route path="AddPost" element={<AddPost />}></Route>
      <Route path="UserProfile" element={<UserProfile />}></Route>
    </Routes>
  );
}

export default App;
