import React from 'react';
import { Box } from '@mui/material';

import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

import './App.css';
import Header from './components/home/Header';
import Home from './components/home/home';
import DetailView from './components/post/DetailView';
import CreatePost from './components/post/CreatePost';
import UpdatePost from './components/post/UpdatePost';
import Login from './components/account/login';

import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { oktaAuthConfig, oktaSignInConfig } from './config';




const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppwithRouterAccess = () => {

  const history = useNavigate();

  const customAuthHandler = () => {
    history('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };
  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
    <SecureRoute path='/' component={Header} />
     <Box style={{marginTop: 64}}>
        <Routes>
            <Route exact path='/' element={<Home />} />

            <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
        <Route path='/login/callback' component={LoginCallback} /> 
            <Route exact path='/details/:id' element={<DetailView />} />
            <Route exact path='/create' element={<CreatePost />} />
            <Route exact path='/update/:id' element={<UpdatePost />} />
        </Routes>
     </Box>
     </Security>
  );
}

export default AppwithRouterAccess;
