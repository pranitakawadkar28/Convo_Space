import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Routes, Route, Navigate } from 'react-router';
import Home from './pages/Home';
import Auth from './pages/Auth';
import * as Sentry from "@sentry/react";

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);

const App = () => {
  return (
    <>
      <SignedIn>
        <SentryRoutes>
          <Route path='/' element={<Home/>}/>
          <Route path='/auth' element={<Navigate to={"/"} replace/>}/>
        </SentryRoutes>
      </SignedIn>

      <SignedOut>
        <SentryRoutes>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='*' element={<Navigate to={"/auth"} replace/>}/>
        </SentryRoutes>
      </SignedOut>
    </>
  )
}

export default App