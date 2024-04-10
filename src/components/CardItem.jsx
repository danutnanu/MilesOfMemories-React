import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link p-4" to={props.path}>
          <img
            className="m-auto mt-2 w-100"
            alt={props.text}
            src={props.src}
          />
          <div className="cards__item__info">
            <h5 className="cards__item__text text-secondary text-center h3 m-4">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
