import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/home/Header';
import Home from './components/home/home';
import { Box } from '@mui/material';
import DetailView from './components/post/DetailView';
import CreatePost from './components/post/CreatePost';
import UpdatePost from './components/post/UpdatePost';
const App = () => {
  return (
    <BrowserRouter>
    <Header />
     <Box style={{marginTop: 64}}>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/details/:id' element={<DetailView />} />
            <Route exact path='/create' element={<CreatePost />} />
            <Route exact path='/update' element={<UpdatePost />} />
        </Routes>
        </Box>
    </BrowserRouter>
  );
}

export default App;
