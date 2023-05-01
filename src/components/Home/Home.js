import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import fakeApiCall from '../../dataComponents/getData';
import dataStorage from '../../dataComponents/dataStorage';
import Navbar from '../NavBar/NavBar';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fakeApiCall(dataStorage).then((res) => setData(res));
  }, [data]);

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop:'3.5%' }}>
        <Card data={data} />
      </div>
    </div>
  );
}

export default Home;
