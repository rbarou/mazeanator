import React, {useState, useEffect} from 'react';

import Menu from '../organisms/menu';
import Grid from '../organisms/grid';

export default function MainPage() {

  const [matrix, setMatrix] = useState([]);
  const [path, setPath] = useState([]);

  const [requestArguments, setRequestArguments] = useState({
    size:21,
    showSteps:false,
    complexify:false,
  });

  const request = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      size: requestArguments.size,
      showSteps:requestArguments.showSteps,
      complexify:requestArguments.complexify,
    })
  };

  const buildLabyrinth = async () => {
    setPath([]);
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

  const solveLabyrinth = async () => {
    const data = await fetch('http://localhost:3000/solve');
    const path = await data.json();
    setPath(path);
  }

  useEffect(() => {
    buildLabyrinth();
    return () => {};
    }, []);


  return (
    <div className='container'>
      <Menu size={requestArguments.size} setRequestArguments={setRequestArguments} onSendRequest={buildLabyrinth} onSolveRequest={solveLabyrinth}/>
      <Grid matrix={matrix} path={path}/>
    </div>
  );
}
