import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>Possibilities are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, animi. Reprehenderit, facere neque eaque mollitia id sapiente blanditiis nemo soluta sunt facilis itaque unde expedita et eos, repellendus suscipit possimus! Optio ipsa dolor repellat cupiditate reiciendis molestias ipsam laborum sunt nihil. Facilis dicta nostrum quam omnis fugiat impedit incidunt adipisci.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
