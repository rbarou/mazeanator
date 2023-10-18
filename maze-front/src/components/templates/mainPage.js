import React, {useState, useEffect} from 'react';

import Menu from '../organisms/menu';
import Grid from '../organisms/grid';

export default function MainPage() {

  const [matrix, setMatrix] = useState([]);
  const [size, setSize] = useState(21);
  const [showSteps, setShowSteps] = useState(false);

  const request = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      size:size,
      showSteps:showSteps
    })
  }

  const buildLabyrinth = async () => {
    const data = await fetch('http://localhost:3000/initGrid', request);
    let tensor = await data.json();
    if(JSON.parse(request.body).showSteps){
      let timeout = 1000;
      for(const matrix of tensor){
        setMatrix(matrix);
        await new Promise(resolve => setTimeout(resolve, timeout));
        if(timeout > 10) timeout /= 1.5;
      }
    }else setMatrix(tensor);
  }

  useEffect(() => {

    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/initGrid', request);
      setMatrix(await data.json());
    }
    fetchData().catch(err => console.log(err));
    return () => {};
    }, []);

  return (
    <div className='container'>
      <Menu size={size} setSize={setSize} setShowSteps={setShowSteps} onSendRequest={buildLabyrinth}/>
      <Grid matrix={matrix}/>
    </div>
  );
}
