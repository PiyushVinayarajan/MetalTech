import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <> 
      <li className='cards__item'>
        {
          props.tag.includes('External') ?
            <a className='cards__item__link'>
              <figure className='cards__item__pic-wrap' data-category={props.label}>
                <img
                  onClick={() => window.open(props.path, '_blank', 'noopener,noreferrer')}
                  className='cards__item__img'
                  alt='Travel Image'
                  src={props.src}
                />
              </figure>
              <div className='cards__item__info'>
                <h5 className={props.tag.includes('External') ?'external__cards__item__text':'cards__item__text'}>{props.text}</h5>
              </div>
            </a>
            :
            <Link className='cards__item__link' to={props.path} target={props.tag.includes('Project') ? '_blank' : ''}>
              <figure className='cards__item__pic-wrap' data-category={props.label}>
                <img
                  onClick={() => { props.sendToParent(props.tag) }}
                  className='cards__item__img'
                  alt='Travel Image'
                  src={props.src}
                />
              </figure>
              <div className='cards__item__info'>
                <h5 className={props.tag.includes('External') ?'external__cards__item__text':'cards__item__text'}>{props.text}</h5>
              </div>
            </Link>
        }
      </li>
    </>
  );
}

export default CardItem;
