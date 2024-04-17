import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className="cards text-center text-secondary p-0 p-lg-5">
      <h1 className='mt-5' id='run2022'>Marathons aren't just about running.</h1>
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
                src='logo.png'
                text='Coming soon...'
                path='#'
              />
              <CardItem
                src='logo.png'
                text='Coming soon...'
                path='#'
              />
              <CardItem
                src='logo2.png'
                text='October 2024'
                path='#'
              />
          </ul>
      </div>
    </div>
  );
}

export default Cards;
