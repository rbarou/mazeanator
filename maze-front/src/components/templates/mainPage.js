import React, {useState, useEffect} from 'react';

import Menu from '../organisms/menu';
import Grid from '../organisms/grid';

export default function MainPage() {

  const [matrix, setMatrix] = useState([]);
  const [size, setSize] = useState(21); 

  const requestInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({size:size})
  }

  useEffect(() => {

    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/initGrid', requestInit);
      setMatrix(await data.json());
    }
    fetchData().catch(err => console.log(err));
    }, []);

  return (
    <div className='container'>
      <Menu size={size} setSize={setSize}/>
      <Grid matrix={matrix}/>
    </div>
  );
}
