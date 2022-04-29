import React from 'react';

import avatar from '../images/avatar.jpg';
import editButton from '../images/edit-button.svg';
import addButton from '../images/add-button.svg';
import editAvatar from '../images/edit-avatar.svg';

function Main(props) {  

  return (
    <main>
      <section className="profile">

        <img  className="profile__overlay" src={editAvatar} alt="Карандаш"/>

        <img onClick={props.onEditAvatar} className="profile__avatar" src={avatar} alt="Аватар"/>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__edit-button">
              <img src={editButton} alt="Кнопка редактирования"/>
            </button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button">
          <img src={addButton} alt="Кнопка добавления"/>
        </button>
      </section>
      <section className="elements">

      </section>
    </main>
  );
}

export default Main;