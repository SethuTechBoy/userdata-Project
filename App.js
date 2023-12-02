import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'; // Correct import for Provider

import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import User from './Pages/User';
import userReducer from './Store/Actions/Reducers/user';

const rootReducer = combineReducers({
  data: userReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/User' element={<User />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
