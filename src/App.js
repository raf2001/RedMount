import React, {useState, useEffect} from 'react';
import NavBar from './components/navbar';
import Content from './components/content';
import Footer from './components/footer';
import './App.css';

function App() {
  const [menus, setMenu] = useState([]);
  const [content, setContent] = useState("");
  const [footer, setFooter] = useState("");
  const [logo, setLogo] = useState("");




  return (
    <div className="App">
      <NavBar setMenu = { setMenu } setLogo = {setLogo}/>
      <Content setContent = {setContent} />
      <Footer setFooter = {setFooter} setMenu = { setMenu } />
    </div>
  );
}

export default App;
