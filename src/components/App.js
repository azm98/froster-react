import React, { useState } from 'react';
import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';

function App() {

  return (
        < div className = "App" >
        <CounterOutput />
        <br/>
        <CounterInput />


  {/* <ApolloProvider client={client}>
 <Employee/>
</ApolloProvider> */}
</div >
  );
}
export default App;