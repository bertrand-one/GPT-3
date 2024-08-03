import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae nostrum totam impedit fuga vel excepturi mollitia numquam quasi molestiae sint voluptates illum, beatae commodi fugiat minus! Illum praesentium, sunt alias atque minima autem aut ipsum totam voluptatum aspernatur ratione nostrum, id esse qui. Necessitatibus tenetur perspiciatis culpa reprehenderit consequatur?" />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ab eos voluptatum ipsum? Architecto a quod deserunt soluta! Architecto quasi enim minus quae sequi ex,"/>
        <Feature title="Knowledgebase"  text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ab eos voluptatum ipsum? Architecto a quod deserunt soluta! Architecto quasi enim minus quae sequi ex,"/>
        <Feature title="Education" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ab eos voluptatum ipsum? Architecto a quod deserunt soluta! Architecto quasi enim minus quae sequi ex," />
      </div>
    </div>
  )
}

export default WhatGPT3
