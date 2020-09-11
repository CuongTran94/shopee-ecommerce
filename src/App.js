import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';
import './App.scss';
import LoginPageContainer from './pages/LoginPage/LoginPageContainer';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import DailyDiscoverContainer from './pages/DailyDiscover/DailyDiscoverContainer';
import { checkUserLogin } from './redux/User/user.actions';
import RegisterPageContainer from './pages/RegisterPage/RegisterPageContainer';
import DetailPageContainer from './pages/DetailPage/DetailPageContainer';
import CartPageContainer from './pages/CartPage/CartPageContainer';
import CheckoutPageContainer from './pages/CheckoutPage/CheckoutPageContainer';
import SearchPage from './pages/SearchPage';
import ProtectedRoute from './components/ProtectedRoute';
import User from './pages/UserPage';
import ProductCateContainer from './pages/ProductCate/ProductCateContainer';
import HomeBlogContainer from './pages/Blog/HomeBlog/HomeBlogContainer';
import ChannelBlogContainer from './pages/Blog/ChannelBlog/ChannelBlogContainer';

const Main = withRouter(({ location }) => {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserLogin());
  }, []);

  return (
    <div>
      {location.pathname !== '/login' &&
      location.pathname !== '/signup' &&
      location.pathname !== '/blog' ? (
        <Header />
      ) : null}
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/login" component={LoginPageContainer} />
        <Route path="/signup" component={RegisterPageContainer} />
        <Route exact path="/cat/:slug" component={ProductCateContainer} />

        <ProtectedRoute
          path="/checkout"
          loggedIn={currentUser}
          component={CheckoutPageContainer}
        />
        <ProtectedRoute
          path="/cart"
          loggedIn={currentUser}
          component={CartPageContainer}
        />
        <Route path="/daily_discover" component={DailyDiscoverContainer} />
        <ProtectedRoute path="/user" loggedIn={currentUser} component={User} />
        <Route path="/search" component={SearchPage} />
        <Route path="/blog" component={HomeBlogContainer} />
        <Route path="/blog/:slug" component={ChannelBlogContainer} />
        <Route exact path="/:slug" component={DetailPageContainer} />
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
