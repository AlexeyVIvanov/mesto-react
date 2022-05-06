import React from 'react';

function Card(props) { 
  
  function handleClick() {    
    props.onImagePopup(props.card);
    
  } 

  return (    
      <article className="elements__item">
        <button type="button" className="elements__trash"></button>
        <img onClick={handleClick} className="elements__image" src={props.card.link} alt={props.card.link}/>
        <div className="elements__caption">
          <h2 className="elements__title">{props.card.name}</h2>
          <div className="elements__like-container">
            <button type="button" className="elements__like"></button>
            <span className="elements__like-count">{props.card.likes.length}</span>
          </div>
        </div>
      </article>    
  );
}

export default Card;