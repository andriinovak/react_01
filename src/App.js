import React, { Suspense } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';

import { Route, BrowserRouter } from 'react-router-dom';
// import MessengesContainer from './components/Messenges/MessengesContainer';
// import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { initializeAppThunk } from './redux/app_reducer';
import { connect } from 'react-redux';
import DownloadAnimation from './components/Users/DownloadAnimation'
import { Provider } from 'react-redux'
import store from './redux/redux_store'

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const MessengesContainer = React.lazy(() => import('./components/Messenges/MessengesContainer'));


class App extends React.Component {

  componentDidMount() {
    this.props.initializeAppThunk();
  }

  render() {
    if (!this.props.initialized) return <DownloadAnimation />
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='content_info'>

          <Route path='/profile/:userId?'>
            <ProfileContainer />
          </Route>
          <Suspense fallback={<DownloadAnimation />}>
            <Route path='/messenges'>
              <MessengesContainer />
            </Route>

            <Route path='/users'>
              <UsersContainer />
            </Route>
          </Suspense>
          <Route path='/login'>
            <LoginContainer />
          </Route>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

let AppContainer = connect(mapStateToProps, { initializeAppThunk })(App);

export default function MainAppWithWrapper() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
}
