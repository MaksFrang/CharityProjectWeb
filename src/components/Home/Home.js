import { useState } from 'react';
import Card from '../Card/Card';
import fakeApiCall from '../../dataComponents/getData';
import dataStorage from '../../dataComponents/dataStorage';
import Navbar from '../NavBar/NavBar';

function Home() {
  const [data, setData] = useState([]);
  fakeApiCall(dataStorage).then((res) => setData(res));

  return (
    <body>
      <Navbar />
		<Card data={data} />
    </body>
  );
}

export default Home;
