import React from 'react';
import BatchingExample from './examples/BatchingExample';
import Transition from './examples/Transition';
import Deffered from './examples/Deffered';
import UseId from './examples/UseId';

function App() {
  return (
    <div className="App">
      <h2>Hello Rect 18</h2>
      <BatchingExample />
      {/*<Transition />*/}
      <Deffered />
      <UseId />
    </div>
  );
}

export default App;
