import React, {useState} from 'react';
import {Example} from './Example';
import {ExampleRenderProps} from './ExampleRenderProps';
import {ExampleUseContext} from './ExampleUseContext';
import {Clock} from './Clock';
import {Context} from './context';

function App() {
  const [showClock, toggleClock] = useState(true);


  return (
    <div className="App">
      <h1>
        Welcome
      </h1>
      <Example/>
      <ExampleRenderProps render={(text) => (<p>{text} </p>)}/>
      <Context.Provider value={{content: 'useContext demo'}}>
        <ExampleUseContext/>
      </Context.Provider>

      <p> These are clock demos below: </p>

      <div>
        <button onClick={() => {toggleClock((prev) => (!prev)); }}>
          hide/show clock
        </button>
        {
          showClock ? <Clock/> : null
        }
      </div>
    </div>
  );
}

export default App;
