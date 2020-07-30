import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './App.scss';
import LoginPageContainer from './pages/LoginPage/LoginPageContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import DailyDiscoverContainer from './pages/DailyDiscover/DailyDiscoverContainer';

const Main = withRouter(({ location }) => {
  return (
      <div>
          {
            window.location.pathname !== '/login' && 
            window.location.pathname !== '/signup' ? <Header /> : null
          }
          <Switch>            
              <Route exact path="/" component={HomePageContainer} />
              <Route path="/daily_discover" component={DailyDiscoverContainer} />
              <Route path="/login" component={LoginPageContainer} />
          </Switch> 
      </div>
  );  
});

function App() {  
  return (
    <BrowserRouter>
      <Route component={ScrollToTop} />
      <React.Fragment>
        <Main />
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;
