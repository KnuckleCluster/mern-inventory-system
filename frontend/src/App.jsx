import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx';
import CreateCategory from './pages/CreateCategory.jsx';
import DeleteCategory from './pages/DeleteCategory.jsx';
import EditCategory from './pages/EditCategory.jsx';
import ShowCategory from './pages/ShowCategory.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/categories/create' element={<CreateCategory />}/>
      <Route path='/categories/details/:id' element={<ShowCategory />}/>
      <Route path='/categories/edit/:id' element={<EditCategory />}/>
      <Route path='/categories/delete/:id' element={<DeleteCategory />}/>
    </Routes>
  );
};

export default App