import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      // APIコール
      const { text } = await( await fetch(`./api/todos`)).json();
      // setData(text[2].description);
      setData(text);

    })();
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          API Response Text: {data}
        </p>
      </header>
    </div>
  );
}

export default App;