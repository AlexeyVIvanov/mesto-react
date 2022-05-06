import React from 'react';

import editButton from '../images/edit-button.svg';
import addButton from '../images/add-button.svg';
import editAvatar from '../images/edit-avatar.svg';

import { api } from '../utils/Api';

import Card from './Card';

function Main(props) {
  
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards(cards)
      .then((cards) => {        
        setCards(cards)      
      })    
  },
  [cards]); 

  React.useEffect(() => {
    api.getProfile()
      .then((data) => {
        
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })    
  },
  []); 

  return (
    <main>
      <section className="profile">
        <img  className="profile__overlay" src={editAvatar} alt="Карандаш"/>
        <img style={{ backgroundImage: `url(${userAvatar})` }} onClick={props.onEditAvatar} className="profile__avatar" src={userAvatar} alt="Аватар"/>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title">{userName}</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__edit-button">
              <img src={editButton} alt="Кнопка редактирования"/>
            </button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button">
          <img src={addButton} alt="Кнопка добавления"/>
        </button>
      </section>
      <section className="elements">
        {/* UL?????????? */}
      {/*<template className="cards">*/}        
        {cards.map((card) => (
        <Card {...card} key={card._id}
        card={card}
        onImagePopup={props.onCardClick}
         />
        ))
        }
      {/*</template> */}
      </section>
    </main>
  );
}

export default Main;