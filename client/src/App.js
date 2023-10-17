import './App.css';
import { Box } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Components
import Sidebar from './component/navbar/Sidebar';
import DashBoard from './component/dashboard/DashBoard';
import Main from './component/equipments/Main';
import DetailView from './component/equipments/DetailView';
import Cart from './component/cart/Cart';
import Query from './component/query/Query';
import Signup from './component/form/Signup';

function App() {
  return (
    <BrowserRouter>
      <Box style={{ display: 'flex', marginTop: 75 }}>
        <Sidebar />
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/equipments' element={<Main />} />
          <Route path='/details/product/:id' element={<DetailView />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/query' element={<Query />} />
          <Route path='/user/signup' element={<Signup />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
