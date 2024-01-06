import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import { auth } from './backend/firebase';
import { 
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom';
 import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/ProfileScreen';

function App() {
  const user= useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{

   const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth)
      {
        //LoggedIn
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        })
        );
      }
      else{
        //LoggedOut
        dispatch(logout());
      }
    });

    return unsubscribe;
  },[dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
      {!user?
      (<LoginScreen />)
    :(
      <Routes>
        <Route path="/profile"
         element={<ProfileScreen />}>
            {" "}
          </Route>

        <Route path="/"
         element={<HomeScreen />}>
            {" "}
          </Route>
        </Routes>

    )}
      </BrowserRouter>
    </div>
  );
}

export default App;
