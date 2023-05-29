import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Navbar from '../NavBar/NavBar';
import UserService from '../../services/userService';
// import fakeApiCall from '../../dataComponents/getData';
// import dataStorage from '../../dataComponents/dataStorage';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    await UserService.GetAllPosts().then((res) => {
      console.log(res.data);
      return setData(res.data);
    });
  }

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5%' }}>
        <Card data={data} />
      </div>
    </div>
  );
}

export default Home;
