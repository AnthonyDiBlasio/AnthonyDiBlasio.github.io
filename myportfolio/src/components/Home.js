import React from 'react';
import '../index.css';
import Wheel from './Wheel';
import Skills from './Skills';
import NavTabs from './NavTabs';
import Footer from './Footer';

const Home = () => {
  const styles = {
    container: {
      position: 'relative',
      padding: '20px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', // Add a subtle shadow
    },
    border: {
      border: '50px solid transparent', // Set the frame border with a transparent color
      borderImage: 'radial-gradient(circle, #93d6eb, #f6f0ed) 1', // Apply the radial gradient as a border image
      boxShadow: '0 0 0 50px rgba(0, 0, 0, 0.3)', // Add a subtle shadow outside the border
      position: 'relative',
      padding: '20px',
    },
  };

  return (
    <div id='root' style={styles.border}>
     
      <NavTabs />
      <header className='header'>
        <h2>Hi, my name is Anthony DiBlasio</h2>
        <br></br>
        <h2>I'm a Full-Stack Web Developer based in Philadelphia</h2>
      </header>
      <section className='row'>
      
          <div className='wheel-container'>
            <Wheel />
          </div>
      
      </section>
      <section className='row'>
        <div className=''>
          <Skills />
        </div>
      </section>
      <Footer />
      </div>
    
  );
};

export default Home;
