import './App.css';
import { React } from "react";
import Home from "./Home";
import ComingSoon from './components/ComingSoon'
import Gallery from "./components/GalleryPage";
import Lounge from "./components/Lounge";
import { Switch, Route } from "react-router-dom";
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/gallery' component={Gallery}></Route>
        <Route exact path='/lounge' component={Lounge}></Route>
      </Switch>
    </Web3ReactProvider>
  );
}

export default App;