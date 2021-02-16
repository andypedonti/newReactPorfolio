
import './App.css';
import Header from './components/header';
import React from 'react';
import Bar from './components/bar';
import AboutMe from './components/about';
import PortfolioItems from './components/portfolioItems';
import Project from './components/projects';

class  App extends React.Component {
  render() {
  return (
    <div>
    <Header />
    <AboutMe />
    <Project />
    <PortfolioItems />
    </div>
  )
}
}
export default App;
