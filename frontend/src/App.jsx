import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Routes, Route, Navigate } from 'react-router';
import Home from './pages/Home';
import Auth from './pages/Auth';

const App = () => {
  return (
    <>
      <SignedIn>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/auth' element={<Navigate to={"/"} replace/>}/>
        </Routes>
      </SignedIn>

      <SignedOut>
        <Routes>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='*' element={<Navigate to={"/auth"} replace/>}/>
        </Routes>
      </SignedOut>
    </>
  )
}

export default App