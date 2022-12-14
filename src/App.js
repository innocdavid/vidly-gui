import React, { Component } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Movies from './components/movies';
import Customers from './components/customers';
import Rental from './components/rental';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MoviesForm from './components/movieForm';
import LoginForm from './components/loginForm';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/movies/:id" element={<MoviesForm />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/rentals" element={<Rental />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/" element={<Navigate to="/movies" />} />
              <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
    
        </main>
      </React.Fragment>   
    );
  }
};

export default App;
