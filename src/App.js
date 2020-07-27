import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <HomePageContainer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
