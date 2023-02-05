import { React } from "react";
import DragAndPlay from './components/DragAndPlay';
import Core from './components/Core'
import Footing from './components/Footer'


const Home = () => {
  return (
      <>
        <DragAndPlay/>
        <Core/>
        <Footing/>
      </>
  )
}

export default Home;