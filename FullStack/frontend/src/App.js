import { createContext, useEffect, useState, useContext } from 'react';
import './App.css';
import Home from './page/Home';
import useFetchToken from './hooks/useFetchToken';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import About from './page/About';
import Info from './page/Info';
import Details from './page/Details';
import { detailsLoader } from './page/Details'
import Error404 from './page/Error404';

export const AuthContext = createContext()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout />}>
      <Route index element = {<Home />} />
      <Route element = {<About />} path='about' />
      <Route element = {<Info />} path="info" />
      <Route element={<Details />} path="info/:id" loader={detailsLoader}></Route>
      <Route element={<Error404 />} path="*" />
    </Route>
  )
)
function App() {
  const {data, isLoading, message} = useFetchToken("http://localhost:8000/api/token/")
  return (
    <>
    {isLoading ? <p>Loading...</p> : 
    <AuthContext.Provider value={{data}}>
      <RouterProvider router= {router}>

      </RouterProvider>
    </AuthContext.Provider>
  }
    </>
  )
}

export default App;
