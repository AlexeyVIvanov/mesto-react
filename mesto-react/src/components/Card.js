import React from 'react';

function Card(props) { 
  
  function handleClick() {
    // onCardClick?????????
    props.onImagePopup(props.card);
  } 

  return (    
    
      <article className="elements__item">
        <button type="button" className="elements__trash"></button>
        <img onClick={handleClick} className="elements__image" src={props.link} alt={props.link}/>
        <div className="elements__caption">
          <h2 className="elements__title">{props.name}</h2>
          <div className="elements__like-container">
            <button type="button" className="elements__like"></button>
            <span className="elements__like-count">{props.likes.length}</span>
          </div>
        </div>
      </article>

    
  );
}

export default Card;