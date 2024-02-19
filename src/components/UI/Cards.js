import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(props) {
  const [isParentData, setIsParentData] = useState('');
  useEffect(() => {
    props.sendToParent(isParentData)
  }, [isParentData]);
  const {cards} = props;
  return(
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {cards.map((index) => (
              <CardItem
                src={index.src}
                text={index.text}
                label={index.label}
                path={index.path}
                sendToParent={setIsParentData}
                tag={index.tag}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
