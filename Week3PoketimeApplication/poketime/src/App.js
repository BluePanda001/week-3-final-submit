import React from '../node_modules/@types/react';
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch} from '../node_modules/react-router-dom' 
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import post from './components/post'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/'component={Home}/>
          <Route path='/about'component={About}/>
          <Route path='/contact'component={Contact}/>    
          <Route path="/:post_id" component={post}/>  
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
