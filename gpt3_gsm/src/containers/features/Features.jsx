import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featureData = [
  {
    title: 'Improving end distrusts Instantly',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsam corrupti dolores nemo minima aliquam est quisquam perspiciatis doloremque eos incidunt praesentium voluptates culpa provident, iure accusamus accusantium nihil distinctio.'
  },
  {
    title: 'Become the trended active',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsam corrupti dolores nemo minima aliquam est quisquam perspiciatis doloremque eos incidunt praesentium voluptates culpa provident, iure accusamus accusantium nihil distinctio.'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsam corrupti dolores nemo minima aliquam est quisquam perspiciatis doloremque eos incidunt praesentium voluptates culpa provident, iure accusamus accusantium nihil distinctio.'
  },
  {
    title: 'Really boymlaw country',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsam corrupti dolores nemo minima aliquam est quisquam perspiciatis doloremque eos incidunt praesentium voluptates culpa provident, iure accusamus accusantium nihil distinctio.'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It.Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className='gpt3__features-container'>
         {featureData.map(( item, index ) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
         ))}
      </div>

    </div>
  )
}

export default Features
