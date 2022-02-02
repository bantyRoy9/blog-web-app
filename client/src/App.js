import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import AppWithRouterAccess from './AppWithRouterAccess';
import { Routes, Route} from 'react-router-dom'


import { Box } from '@mui/material';

import './App.css';
import Header from './components/home/Header';
import Home from './components/home/home';
import DetailView from './components/post/DetailView';
import CreatePost from './components/post/CreatePost';
import UpdatePost from './components/post/UpdatePost';

const App = () => (
  <BrowserRouter>
     <Box style={{marginTop: 64}}></Box>
        <Header exact path='/' element={<Header/>} />
        <Routes>
            <Route exact path='/' element={<Home />} />

            {/* <Route exact path='/login' render={() => <Login config={oktaSignInConfig} />} /> */}
           {/* <Route exact path='/login/callback' element={<LoginCallback/>} />  */}
            <Route exact path='/details/:id' element={<DetailView />} />
            <Route exact path='/create' element={<CreatePost />} />
            <Route exact path='/update/:id' element={<UpdatePost />} />
        </Routes>
     
    {/* <AppWithRouterAccess/>?? */}
  </BrowserRouter>
);
export default App;