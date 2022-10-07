import React from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

 function Router() {
  return (
    <div>
        <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
    </div>
  )
}

export default Router;
