import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className="cards text-center text-secondary p-0 p-lg-5">
      <h1 className='mt-5 p-5 h5'>"The legend of the marathon is not only linked to the name of Ancient Greece, but the British royal family itself seems to have had an important say. At the 1908 Olympics, the British crown insisted that the marathon start from in front of Windsor Palace, so that the royal family could watch the start of the race from the window. This officially established the distance of the marathon as 42.195 km, exactly the distance from the palace to the Olympic stadium, where the finish line of the competition was."</h1>
      <h2 className='mt-5' id='run2022'>Marathons aren't just about running.</h2>
      <div className='cards__container m-auto w-100'>

        <p className='mb-5 mt-5 text-center h1'>2022</p>
        <ul className='cards__items list-unstyled'>
              <CardItem
                src="run1.png"
                text="First Official Half Marathon - June 2022"
                path="story1"
              />
              <CardItem
                src='run2.png'
                text='First Marathon - October 2022'
                path='story2'
              />
        </ul>

        <p className='my-5 text-center h1' id='run2023'>2023</p>
        <ul className='cards__items list-unstyled'>
              <CardItem
                src='run3.png'
                text='Exeter Marathon - May 2023'
                path='story3'
              />
              <CardItem
                src='run4.png'
                text='Eden Marathon - October 2023'
                path='story4'
              />
        </ul>

        <p className='m-5 text-center h1' id='run2024'>2024</p>
        <ul className='cards__items list-unstyled'>
              <CardItem
                src='1Plymouth24.png'
                text='Plymouth Half Marathon - April 2024'
                path='story5'
              />
              <CardItem
                src='1Exeter24.png'
                text='Exeter Marathon - May 2024'
                path='story6'
              />
              <CardItem
                src='1Eden24.png'
                text='Eden Marathon - October 2024'
                path='story7'
              />
          </ul>
      </div>
    </div>
  );
}

export default Cards;
