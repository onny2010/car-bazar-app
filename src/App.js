import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import AllMechanic from "./Pages/AllMechanic/AllMechanic";
import Booking from "./Pages/Booking/Booking";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore";
import Hire from "./Pages/Hire/Hire";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivetRoute from "./Pages/Login/PrivetRoute/PrivetRoute";
import Register from "./Pages/Login/Register/Register";
import Payment from "./Pages/Payment/Payment";
import PaymentResult from "./Pages/PaymentResult/PaymentResult";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/all-mechanic">
              <AllMechanic/>
            </Route>
            <PrivetRoute path="/payment">
              <Payment/>
            </PrivetRoute>
            <PrivetRoute path="/result">
              <PaymentResult/>
            </PrivetRoute>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <PrivetRoute path="/booking/:id">
              <Booking></Booking>
            </PrivetRoute>
            <PrivetRoute path="/hire/:id">
              <Hire></Hire>
            </PrivetRoute>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
