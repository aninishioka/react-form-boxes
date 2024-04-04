import { useState } from 'react';
import BoxList from './BoxList';


/** Component for entire page.
 *
 * Props: none
 *
 * State: none
 *
 * App -> BoxList
 *
*/

function App() {

  return (
    <div className="App">
      <BoxList/>
    </div>
  );
};

export default App;
