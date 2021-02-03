
import './App.css';
import Header from './components/header';
import React from 'react';
import Bar from './components/bar';
import AboutMe from './components/about';

class  App extends React.Component {
  render() {
  return (
    <div>
    <Header />
    <Bar />
    <AboutMe />
    </div>
  )
}
}
export default App;
