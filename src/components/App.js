import React, { useState } from 'react';
import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';

function App() {
const [counter,setcounter] =  useState(0)
  return (
        < div className = "App" >
        <CounterOutput counter={counter}/>
        <br/>
        <CounterInput setcounter={setcounter} counter={counter}/>


  {/* <ApolloProvider client={client}>
 <Employee/>
</ApolloProvider> */}
</div >
  );
}
export default App;