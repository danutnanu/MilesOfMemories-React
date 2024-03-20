import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className="cards text-secondary">
      <h1 className='mt-5' id='run2022'>Marathons aren't just about running.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper border border-warning'>

          <p className='mb-5 text-center h1'>2022</p>
          <ul className='cards__items border border-warning'>
                <CardItem
                  src="run1.png"
                  text="First Official Half Marathon - June 2022"
                  label="Crazy Run"
                  path="story1"
                />
                <CardItem
                  src='run2.png'
                  text='First Marathon - October 2022'
                  label='Crazy Run'
                  path='story2'
                />
          </ul>

          <p className='my-5 text-center h1' id='run2023'>2023</p>
          <ul className='cards__items'>
                <CardItem
                  src='run3.png'
                  text='Exeter Marathon - May 2023'
                  label='Crazy Run'
                  path='#'
                />
                <CardItem
                  src='run4.png'
                  text='Eden Marathon - October 2023'
                  label='Crazy Run'
                  path='#'
                />
          </ul>

          <p className='m-5 text-center h1' id='run2024'>2024</p>
          <ul className='cards__items'>
                <CardItem
                  src='logo.png'
                  text='Coming soon...'
                  label='Crazy Run'
                  path='#'
                />
                <CardItem
                  src='logo.png'
                  text='Coming soon...'
                  label='Crazy Run'
                  path='#'
                />
                <CardItem
                  src='logo2.png'
                  text='October 2024'
                  label='Crazy Run'
                  path='#'
                />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
