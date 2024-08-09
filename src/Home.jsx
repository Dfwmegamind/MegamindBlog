import React from 'react';
import Header from './Header';
import "./home.css"
import Sidebar from "./Sidebar";
import Posts from './Posts/Posts';

const Home = () => {
  return (
    <>
      <Header/>
    <div className="home">
      <Posts/>
      <Sidebar/>
    </div>
    </>
  )
}

export default Home
