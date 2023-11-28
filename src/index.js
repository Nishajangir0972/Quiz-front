import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.js';
import Header from './Header.js';
import Form from './Form.jsx';
import AllQuestion from './AllQuestion.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/form' element={<Form/>}/>
      <Route path='/allQuestion' element={<AllQuestion/>}/>
      </Routes>

    </BrowserRouter>

  </>
);


