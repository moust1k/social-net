import React from 'react';
import { Suspense } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Settings from './components/content/settings/Settings'
import News from './components/content/news/News';
import Music from './components/content/music/Music';
import DialogsContainer from './components/content/dialogs/DialogsContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProfileContainer from './components/content/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Preloader from './components/common/preloader/Preloader';

const LoginContainer = React.lazy(() => import('./components/login/LoginContainer'))
const UsersContainer = React.lazy(() => import('./components/content/users/UsersContainer'))


function App() {

  return (
    <Router>
      <div className="app_wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/' element={<ProfileContainer />} />
            <Route path='/profile/*' element={<ProfileContainer />} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/users' element={
              <Suspense fallback={<Preloader />}>
                <UsersContainer />
              </Suspense>} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/login' element={
              <Suspense fallback={<Preloader />}>
                <LoginContainer />
              </Suspense>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App