import React from 'react';

import Menu from '../organisms/menu';
import Grid from '../organisms/grid';

export default function MainPage() {
  return (
    <div className='container'>
      <Menu/>
      <Grid rows={20} cols={100}/>
    </div>
  );
}
