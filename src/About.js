import React from 'react';
import MyPhoto from './MyPhoto.jpeg';
const About = () => {
  return (
    <section id="about">
      <div style={{ width: '50%' }}>
        <h1>Hi, I am Prabhjeet!</h1>
        <p>I am Prabhjeet Singh and I am currently studying in SRM Institute of Science and Technology.I am a software developer with a passion for building scalable and efficient software solutions.</p>
      </div>
      <div className='pic'>
        <img src='/MyPhoto.jpeg' alt='My Photo'></img>
      </div>
    </section>
  );
};

export default About;