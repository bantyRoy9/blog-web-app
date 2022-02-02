// import React from 'react';
// import { Routes, Route, useNavigate} from 'react-router-dom'
// import { secureRoute, LoginCallback } from '@okta/okta-react';
// import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
// import { oktaAuthConfig, oktaSignInConfig } from './config';

// import { Box } from '@mui/material';

// import './App.css';
// import Header from './components/home/Header';
// import Home from './components/home/home';
// import DetailView from './components/post/DetailView';
// import CreatePost from './components/post/CreatePost';
// import UpdatePost from './components/post/UpdatePost';
// import Login from './components/account/login';






// const oktaAuth = new OktaAuth(oktaAuthConfig);

// const AppwithRouterAccess = () => {

//   const navigate = useNavigate();

//   const customAuthHandler = () => {
//     navigate('login');
//   };

//   const restoreOriginalUri = async (_oktaAuth, originalUri) => {
//     navigate.replace(toRelativeUrl(originalUri, window.location.origin));
//   };
//   return (
//     <Security
//       oktaAuth={oktaAuth}
//       onAuthRequired={customAuthHandler}
//       restoreOriginalUri={restoreOriginalUri}
//     >
//     <Route exact path='/' element={<Header/>} />
//      <Box style={{marginTop: 64}}>
//         <Routes>
//             <Route exact path='/' element={<Home />} />

//             <Route exact path='/login' render={() => <Login config={oktaSignInConfig} />} /> */}
//             <Route exact path='/login/callback' element={<LoginCallback/>} /> 
//             <Route exact path='/details/:id' element={<DetailView />} />
//             <Route exact path='/create' element={<CreatePost />} />
//             <Route exact path='/update/:id' element={<UpdatePost />} />
//         </Routes>
//      </Box>
    
//    </Security>
//   );
// }

// export default AppwithRouterAccess;
