import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BottomNav } from './components/BottomNav.jsx';

import Header from './Header.jsx';
import { CallDetailsNoSelected } from './screens/call-details-no-selected/CallDetailsNoSelected.js';
import { Configuration } from './screens/configuration/Configuration.jsx';
import { CallDetails } from './screens/details/CallDetails.jsx';
import { Dial } from './screens/dial/Dial.jsx';
import { Feed } from './screens/feed/Feed.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='dial' element={<Dial/>}/>
        <Route path='configuration' element={<Configuration/>}/>
        <Route path='details' element={<CallDetailsNoSelected/>}/>
        <Route path='details/:id' element={<CallDetails />}/>
      </Routes>
      <BottomNav></BottomNav>
    </div>
  );
};

ReactDOM.render(
<BrowserRouter>
  <App/>
</BrowserRouter>
, document.getElementById('app'));

export default App;
