import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.scss';
import LoginPageContainer from './pages/LoginPage/LoginPageContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import DailyDiscoverContainer from './pages/DailyDiscover/DailyDiscoverContainer';
import { useSelector, useDispatch } from 'react-redux';
import { checkUserLogin } from './redux/User/user.actions';
import RegisterPageContainer from './pages/RegisterPage/RegisterPageContainer';

const Main = withRouter(({ location }) => {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkUserLogin());
  }, []);

  return (
      <div>
          {
            location.pathname !== '/login' && 
            location.pathname !== '/signup' ? <Header /> : null
          }
          <Switch>            
              <Route exact path="/" component={HomePageContainer} />
              <Route path="/daily_discover" component={DailyDiscoverContainer} />
              <Route path="/login" render={() => currentUser ? <Redirect to="/" /> : (
                <LoginPageContainer />
              )} />
              <Route path="/signup" render={() => currentUser ? <Redirect to="/" /> : (
                <RegisterPageContainer />
              )} />
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
