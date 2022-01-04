// React
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// Redux state control
import { Provider } from 'react-redux';
import store from './store';

// Routing
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } from "react-router-dom";

import Home  from './pages/Home';
import CanvasReact from './pages/CanvasInReact';
import ThreeDeSite from './pages/3dScene';

//Style
import { ThemeProvider } from 'styled-components';
import { defaultTheme , GlobalStyle } from './theme';

//Components
import Loading from './components/Loading'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle /> 
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/canvas-react' component={CanvasReact}/>
            <Suspense fallback={<Loading text={'Loading'}/>}>
            <Route exact path='/three-de-scene' component={ThreeDeSite}/>
            </Suspense>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
  , document.getElementById('root'));
