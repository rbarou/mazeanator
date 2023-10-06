import React, {useState, useEffect} from 'react';

import Menu from '../organisms/menu';
import Grid from '../organisms/grid';

const requestInit = {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({size:21})
}

export default function MainPage() {

  const [matrix, setMatrix] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/initGrid', requestInit);
      setMatrix(await data.json());
    }
    fetchData().catch(err => console.log(err));
    }, []);

  return (
    <div className='container'>
      <Menu/>
      <Grid matrix={matrix}/>
    </div>
  );
}
