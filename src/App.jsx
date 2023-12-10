import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>Sumar</button>
        <br />
        <br />
        <button onClick={() => setCount((count) => count - 1)}>Restar</button>
        <h4>{count}</h4>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
