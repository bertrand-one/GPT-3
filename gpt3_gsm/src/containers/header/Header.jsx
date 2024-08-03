import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>

        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti doloribus alias unde necessitatibus itaque. Dolores mollitia animi minima sint est, nesciunt sit illo, maiores iure saepe quia quae ipsa autem.</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='your email adress' />
          <button type='button'>Get satrted</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 pepople requested access a visit in last 24 hours</p>
        </div>

      </div>
      
        <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
        </div>

    </div>
  )
}

export default Header
