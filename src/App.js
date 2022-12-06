import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Movies from './components/movies';
import Customers from './components/customers';
import Rental from './components/rental';
import NotFound from './components/notFound';


class App extends Component {
  render() {
    return (
      <main className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/movies" />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </BrowserRouter>
      </main>
    )
  }
}

export default App;
